import { useAdminAction, AdminActionType } from "../../Context/AdminProvider";
import useInput from "../../Hook/useInput";
import useInputFile from "../../Hook/useInputFile";
import { useState, useEffect, useRef } from "react";
import useInputTag from "../../Hook/useInputTag";
import { formCheck, deleteConfirm } from "../../util/formCheck";
import checkFile from "../../util/filecheck";
import { PortfolioProps, PortfolioDetailProps } from "../../Interface/portfolio";
import usePortfolio from "../../Hook/usePortfolio";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import { AdminFormContents } from "../../Interface/adminForm";
import useCol from "../../Hook/useCol";
import useInputOption from "../../Hook/useInputOption";
import { CategoryProps } from "../../Interface/category";
import theme from "../../Styles/theme";
import useEditor from "../../Hook/useEditor";
import useContents from "../../Hook/useContents";
import { useLoading } from "../../Context/AppProvider";
import styled, { css } from "styled-components";
import media from "../../Styles/media";
import BtnText from "../../Component/Btn/BtnText";
import PortfolioList from "../../Component/PortfolioList";
import useElementSize from "../../Hook/useElementSize";
import PageContainer from "../../Layout/PageLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import AdminForm from "../../Component/Admin/AdminForm";
import AddBtn from "../../Component/Admin/AddBtn";

const Category = styled.ul`
	display: flex;
	margin-bottom: ${(props) => `${props.theme.size.gap.section}px`};
	overflow: scroll;
	${(props) => props.theme.style.hideScroll};
`;

const CategoryList = styled.li<{ active: boolean }>`
	border: 1px solid ${(props) => props.theme.color.gray.dark};
	padding: 12px;
	border-radius: 12px;
	margin-right: 12px;
	display: flex;
	align-items: center;
	flex-shrink: 0;
	${(props) =>
		props.active
			? css`
					background-color: ${(props) => props.theme.color.gray.dark};
					color: ${(props) => props.theme.color.white};
			  `
			: css`
					background-color: transparent;
					color: ${(props) => props.theme.color.gray.dark};
			  `};

	@media ${media.hover} {
		&:hover {
			cursor: pointer;
			opacity: 0.5;
		}
	}
`;

const CategoryBtn = styled(BtnText)``;
const Count = styled.p`
	margin-left: 8px;
	font-size: 12px;
`;

const ListWrppaer = styled.ul`
	display: flex;
	margin-bottom: ${(props) => `${props.theme.size.gap.section}px`};
	flex-wrap: wrap;
`;

const portfolio = () => {
	useRidrectToSignin();
	const { data, uploadPortfolio, category, uploadCategory, handleNowData, nowData, updatePortfolio, deletePortfolio } = usePortfolio();
	const { setAdminAction, adminAction } = useAdminAction();
	const [form, setForm] = useState<PortfolioProps>();
	const { setLoading } = useLoading();

	const titleInput = useInput("");
	const subTitleInput = useInput("");
	const categoryInput = useInputOption("");
	const thumbnailInput = useInputFile();

	const [detail, setDetail] = useState<PortfolioDetailProps>();
	const partnerInput = useInput("");
	const businessInput = useInput("");
	const count_studentInput = useInput("");
	const count_schoolInput = useInput("");
	const areaInput = useInputTag();
	const mediaTextInput = useInput("");
	const mediaLinkInput = useInput("");
	const descriptInput = useEditor("");

	const contentsInput = useContents({ isText: false });

	const formRef = useRef<HTMLFormElement>();

	const [nowCategory, setNowCategory] = useState<string>(null);
	const { col } = useCol({ pc: 4, tablet: 3, mobile: 2 });

	// category
	const newCategoryName = useInput("");
	const newCategoryColor = useInput(theme.color.main);
	const [newCategory, setNewCategory] = useState<CategoryProps | null>(null);

	const handleCategoryClick = (index: string | null) => {
		setNowCategory(index);
	};

	const handleListClick = (id: string | null) => {
		handleNowData(id);
	};

	useEffect(() => {
		if (nowData) {
			setAdminAction(AdminActionType.EDIT);

			// basic
			titleInput.setValue(nowData.title);
			subTitleInput.setValue(nowData.subTitle);
			categoryInput.setValue(nowData.category.id);
			thumbnailInput.setValue(nowData.thumbnail.fileName);

			// detail
			partnerInput.setValue(nowData.detail.partner);
			businessInput.setValue(nowData.detail.business);
			count_studentInput.setValue(nowData.detail.count_student);
			count_schoolInput.setValue(nowData.detail.count_school);
			areaInput.setValue(nowData.detail.area);
			mediaTextInput.setValue(nowData.detail.media.title);
			mediaLinkInput.setValue(nowData.detail.media.link);
			descriptInput.setValue(nowData.detail.descript);

			// contents
			contentsInput.setValue(nowData.contents);
		}
	}, [nowData]);

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
			},
			descript: descriptInput.value
		});
	}, [partnerInput.value, businessInput.value, count_studentInput.value, count_schoolInput.value, areaInput.value, mediaTextInput.value, mediaLinkInput.value, descriptInput.value]);

	useEffect(() => {
		setForm({
			category: categoryInput.value,
			thumbnail: null,
			subTitle: subTitleInput.value,
			title: titleInput.value,
			detail: detail,
			contents: null
		});
	}, [detail, titleInput.value, subTitleInput.value, categoryInput.value, contentsInput.value]);

	const handleSubmit = async () => {
		// 기본 정보 확인
		if (!titleInput.value || !subTitleInput.value || !thumbnailInput.fileName) {
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

		setLoading(true);

		// 카테고리 확인
		let categoryId: string | boolean = null;

		if (newCategory !== null) {
			// 카테고리 업로드
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

		const postData = { ...form, category: categoryId ? categoryId : categoryInput.value };
		// SUBMIT
		if (adminAction === AdminActionType.ADD) {
			// POST
			try {
				await uploadPortfolio(postData, thumbnailInput, contentsInput);
			} catch (err) {
				console.log(err);
			}
		} else if (adminAction === AdminActionType.EDIT) {
			// UPDATE
			try {
				await updatePortfolio(postData, thumbnailInput, contentsInput);
			} catch (err) {
				console.log(err);
			}
		}

		// INIT
		formInit();
	};

	const handleDelete = async () => {
		if (deleteConfirm()) {
			setLoading(true);
			await deletePortfolio(contentsInput);
			formInit();
		}
	};

	useEffect(() => {
		if (adminAction === null) {
			formInit();
		}
	}, [adminAction]);

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
		descriptInput.init();
		contentsInput.init();

		setNewCategory(null);
		setNowCategory(null);
		handleNowData(null);

		setLoading(false);

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
				{ ...mediaLinkInput, placeholder: "언론보도 링크" },
				{ ...descriptInput, placeholder: "상세 설명", type: "editor" }
			]
		},
		{
			title: "컨텐츠 정보",
			inputs: [
				{
					...contentsInput,
					placeholder: "컨텐츠",
					type: "contents"
				}
			]
		}
	];

	const { ref, size } = useElementSize();

	return (
		<PageContainer>
			<ContainerLayout containerRef={ref}>
				<AdminTitleSection title="포트폴리오" />

				<Category>
					<CategoryList active={nowCategory === null} onClick={() => handleCategoryClick(null)}>
						<CategoryBtn text={"전체"} />
					</CategoryList>
					{category !== undefined &&
						category.map((el) => {
							return (
								<CategoryList key={el.id} active={nowCategory === el.id} onClick={() => handleCategoryClick(el.id)}>
									<CategoryBtn text={el.name} opacityAction={false} />
									<Count>{el.count}</Count>
								</CategoryList>
							);
						})}
				</Category>

				<ListWrppaer>
					{data !== undefined &&
						data
							.filter((el) => (nowCategory !== null ? el.category.id === nowCategory : el))
							.map((portfolio, index) => {
								return <PortfolioList key={portfolio.id} data={portfolio} col={col} isLast={(index + 1) % col === 0} onClick={handleListClick} parentSize={size} />;
							})}
				</ListWrppaer>
			</ContainerLayout>

			<AdminForm title={"포트폴리오"} onSubmit={handleSubmit} onDelete={handleDelete} contents={formContents} formRef={formRef} />

			<AddBtn />
		</PageContainer>
	);
};

export default portfolio;
