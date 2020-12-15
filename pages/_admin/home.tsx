import PageContainer from "../../Layout/PageLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import CategoryList from "../../Component/Admin/CategoryList";
import useCategory from "../../Hook/useCategory";
import styled from "styled-components";
import AdminForm from "../../Component/Admin/AdminForm";
import useInput from "../../Hook/useInput";
import { AdminFormContents } from "../../Interface/adminForm";
import { useRef, useEffect, useState } from "react";
import useCol from "../../Hook/useCol";
import { useAdminAction, AdminActionType } from "../../Context/AdminProvider";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import theme from "../../Styles/theme";
import InputFile from "../../Component/Input/InputFile";
import useInputFile from "../../Hook/useInputFile";
import BtnIcon from "../../Component/Btn/BtnIcon";
import useCover from "../../Hook/useCover";
import { useLoading } from "../../Context/AppProvider";
import media from "../../Styles/media";

const CategoryWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const CoverInputWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 64px;
`;

const CustomeInputFile = styled(InputFile)<{ image?: string }>`
	width: 50%;
	${(props) => props.theme.layout.ratio(34)};
	position: relative;
	padding: 0;
	${(props) => props.theme.layout.full_image(props.image)};

	label {
		left: 0;
		top: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		border-color: transparent;

		@media ${media.hover} {
			&:hover {
				background-color: transparent;
				opacity: 0.5;
			}
		}
	}
`;

const category = () => {
	useRidrectToSignin();
	const formRef = useRef<HTMLFormElement>();
	const nameInput = useInput("");
	const coverInput = useInputFile();
	const colorInput = useInput(theme.color.main);
	const { category, handleNowCategory, nowCategory, updateCategory } = useCategory();
	const { adminAction, setAdminAction } = useAdminAction();
	const [newCategory, setNewCategory] = useState(null);
	const { col } = useCol({
		pc: 3,
		tablet: 2
	});
	const { cover, update } = useCover();
	const { setLoading } = useLoading();

	useEffect(() => {
		console.log(cover);
		if (cover && category) {
			// setLoading(false);
		}
	}, [cover, category]);

	useEffect(() => {
		if (cover) {
			coverInput.setValue(cover.fileName);
		}
	}, [cover]);

	useEffect(() => {
		if (adminAction === AdminActionType.EDIT) {
			setNewCategory({
				name: nameInput.value,
				color: colorInput.value
			});
		}
	}, [adminAction, nameInput.value, colorInput.value]);

	const handleSubmit = async () => {
		try {
			setLoading(true);

			await updateCategory(nowCategory.id, newCategory);
			initForm();
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	const initForm = () => {
		setAdminAction(null);
		nameInput.init();
		colorInput.init();
	};

	useEffect(() => {
		if (!!nowCategory) {
			nameInput.setValue(nowCategory.name);
			colorInput.setValue(nowCategory.color);
		}
	}, [nowCategory]);

	const handleListClick = (id: string) => {
		handleNowCategory(id);
	};

	useEffect(() => {
		if (adminAction === null) {
			handleNowCategory(null);
		}
	}, [adminAction]);

	const formContents: AdminFormContents[] = [
		{
			title: "-",
			inputs: [
				{ ...nameInput, placeholder: "이름", label: "이름" },
				{ ...colorInput, placeholder: "색상", label: "색상", type: "color" }
			]
		}
	];

	const handleCoverSaveClick = async () => {
		setLoading(true);
		await update(coverInput);
		coverInput.initFile();
		setLoading(false);
	};

	return (
		<PageContainer>
			<ContainerLayout>
				<AdminTitleSection title="홈" />
				<CoverInputWrapper>
					<CustomeInputFile {...coverInput} image={cover && cover.url} />
					<BtnIcon icon={"check"} onClick={handleCoverSaveClick} disable={!coverInput.file} />
				</CoverInputWrapper>

				<AdminTitleSection title="카테고리" />

				<CategoryWrapper>
					{category &&
						category.map((el, index) => {
							return <CategoryList key={el.id} {...el} col={col} isLast={index + (1 % col) === 0} onClick={() => handleListClick(el.id)} />;
						})}
				</CategoryWrapper>
			</ContainerLayout>

			<AdminForm title={"카테고리 수정"} onSubmit={handleSubmit} contents={formContents} formRef={formRef} deleteDisable={true} />
		</PageContainer>
	);
};

export default category;
