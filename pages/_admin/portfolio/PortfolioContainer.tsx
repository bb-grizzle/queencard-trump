import PortfolioPresentor from "./PortfolioPresentor";
import { useAdminAction, AdminActionType } from "../../../Context/AdminProvider";
import useInput from "../../../Hook/useInput";
import useInputFile from "../../../Hook/useInputFile";
import { useState, useEffect, useRef } from "react";
import useInputTag from "../../../Hook/useInputTag";
import { formCheck } from "../../../util/formCheck";
import checkFile from "../../../util/filecheck";
import { PortfolioProps, PortfolioDetailProps } from "../../../Interface/portfolio";
import { fbUploadData, fbUploadStorage, fbUpdateData, fbGetData } from "../../../Firebase/firebase";
import usePortfolio from "../../../Hook/usePortfolio";
import useRidrectToSignin from "../../../Hook/useRidrectToSignin";
import { AdminFormContents } from "../../../Interface/adminForm";
import useCol from "../../../Hook/useCol";
import useInputOption from "../../../Hook/useInputOption";
import { CategoryProps } from "../../../Interface/category";
import theme from "../../../Styles/theme";

const PortfolioContainer = () => {
	useRidrectToSignin();
	const { data, uploadPortfolio, category, uploadCategory } = usePortfolio();
	const { setAdminAction, adminAction } = useAdminAction();
	const [form, setForm] = useState<PortfolioProps>();
	const titleInput = useInput("title test");
	const subTitleInput = useInput("submit Title test");

	const categoryInput = useInputOption("");
	const thumbnailInput = useInputFile();

	const [detail, setDetail] = useState<PortfolioDetailProps>();

	const partnerInput = useInput("partner test");
	const businessInput = useInput("businessInput test");
	const count_studentInput = useInput(20);
	const count_schoolInput = useInput(20);
	const areaInput = useInputTag(["test", "test2", "test3"]);
	const mediaTextInput = useInput("mediaTextInput test");
	const mediaLinkInput = useInput("https://naver.com");

	const formRef = useRef<HTMLFormElement>();

	const [nowCategory, setNowCategory] = useState<string>(null);
	const { col } = useCol({ pc: 4 });
	// category
	const newCategoryName = useInput("");
	const newCategoryColor = useInput(theme.color.main);
	const [newCategory, setNewCategory] = useState<CategoryProps | null>(null);

	const handleCategoryClick = (index: string | null) => {
		setNowCategory(index);
	};

	// MEDIA
	useEffect(() => {
		setDetail({
			partner: partnerInput.value,
			business: businessInput.value,
			count_student: count_studentInput.value,
			count_school: count_schoolInput.value,
			area: areaInput.value,
			media: {
				title: mediaTextInput.value,
				link: mediaLinkInput.value
			}
		});
	}, [partnerInput.value, businessInput.value, count_studentInput.value, count_schoolInput.value, areaInput.value]);

	useEffect(() => {
		setForm({
			category: categoryInput.value,
			thumbnail: null,
			subTitle: subTitleInput.value,
			title: titleInput.value,
			detail: detail
		});
	}, [detail, titleInput.value, subTitleInput.value, categoryInput.value, thumbnailInput.url]);

	const handleSubmit = async () => {
		// 기본 정보 확인
		if (!titleInput.value || !subTitleInput.value || !thumbnailInput.file) {
			formCheck();
			return;
		}
		// 상세 정보 확인
		if (!partnerInput.value || !businessInput.value || !count_schoolInput.value || !count_studentInput.value || !areaInput.value || !mediaTextInput.value || !mediaLinkInput.value) {
			formCheck();
			return;
		}
		if (!mediaLinkInput.value.includes("http://") && !mediaLinkInput.value.includes("https://")) {
			formCheck("언론보도 링크는 http:// 또는 https:// 를 포함해주세요. ");
			return;
		}

		// FILE CHECK & UPLOAD
		checkFile(thumbnailInput);

		// 카테고리 확인
		let categoryId: string | boolean = null;

		if (newCategory !== null) {
			if (newCategory.name === "") {
				formCheck("카테고리 이름을 작성해주세요. ");
				return;
			}
			// 카테고리 이름 중복 확인
			categoryId = await uploadCategory(newCategory);
			if (categoryId === false) {
				return;
			}
		} else {
			if (!categoryInput.value) {
				formCheck();
				return;
			}
		}

		// SUBMIT
		if (adminAction === AdminActionType.ADD) {
			// POST
			try {
				await uploadPortfolio({ ...form, category: categoryId ? categoryId : categoryInput.value }, thumbnailInput);
			} catch (err) {
				console.log(err);
			}
		} else if (adminAction === AdminActionType.EDIT) {
			// EDIT
		}

		// INIT
		formInit();
	};

	const formInit = () => {
		setAdminAction(null);

		titleInput.init();
		subTitleInput.init();
		categoryInput.init();
		partnerInput.init();
		businessInput.init();
		count_studentInput.init();
		count_schoolInput.init();
		mediaTextInput.init();
		mediaLinkInput.init();
		areaInput.init();
		thumbnailInput.init();
		newCategoryName.init();
		newCategoryColor.init();

		setNewCategory(null);

		if (formRef !== undefined && formRef.current !== undefined) {
			formRef.current.scrollTop = 0;
		}
	};

	const formContents: AdminFormContents[] = [
		{
			title: "기본 정보",
			inputs: [
				{ ...titleInput, placeholder: "제목" },
				{ ...subTitleInput, placeholder: "부 제목" },
				{
					...categoryInput,
					placeholder: "카테고리",
					type: "category",
					options: category,
					nameInput: newCategoryName,
					colorInput: newCategoryColor,
					setNewCategory: setNewCategory
				},
				{ ...thumbnailInput, type: "file" }
			]
		},
		{
			title: "상세 정보",
			inputs: [
				{ ...partnerInput, placeholder: "파트너" },
				{ ...businessInput, placeholder: "사업명" },
				{ ...count_studentInput, placeholder: "참여학생", type: "number" },
				{ ...count_schoolInput, placeholder: "참여학교", type: "number" },
				{ ...areaInput, placeholder: "참여지역", type: "tag" },
				{ ...mediaTextInput, placeholder: "언론보도 제목" },
				{ ...mediaLinkInput, placeholder: "언론보도 링크" }
			]
		}
	];

	return (
		<PortfolioPresentor
			category={category}
			onSubmit={handleSubmit}
			formContents={formContents}
			formRef={formRef}
			data={data}
			onCategoryClick={handleCategoryClick}
			nowCategory={nowCategory}
			listCol={col}
		/>
	);
};

export default PortfolioContainer;
