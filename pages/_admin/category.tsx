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

const CategoryWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const category = () => {
	useRidrectToSignin();
	const formRef = useRef<HTMLFormElement>();
	const nameInput = useInput("");
	const colorInput = useInput(theme.color.main);
	const { category, handleNowCategory, nowCategory, updateCategory } = useCategory();
	const { adminAction, setAdminAction } = useAdminAction();
	const [newCategory, setNewCategory] = useState(null);
	const { col } = useCol({
		pc: 3,
		tablet: 2
	});

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
			await updateCategory(nowCategory.id, newCategory);
			initForm();
		} catch (err) {
			console.log(err);
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
				{ ...nameInput, placeholder: "이름" },
				{ ...colorInput, placeholder: "색상", type: "color" }
			]
		}
	];

	return (
		<PageContainer>
			<ContainerLayout>
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
