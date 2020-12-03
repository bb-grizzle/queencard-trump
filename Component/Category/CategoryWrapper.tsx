import styled, { css } from "styled-components";
import { useCategoryData } from "../../Context/AppProvider";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import Numbering from "../Numbering";
import { useEffect } from "react";

const Wrapper = styled.ul`
	margin-bottom: 16px;
`;

const CategoryText = styled(Paragraph)`
	margin-right: 4px;
`;

const CategoryCount = styled(Numbering)``;

const CategoryList = styled.li<{ active: boolean | null }>`
	display: flex;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
	cursor: pointer;
	${(props) =>
		props.active === false &&
		css`
			${CategoryText} {
				color: ${(props) => props.theme.color.disable};
			}
			${CategoryCount} {
				background-color: ${(props) => props.theme.color.disable};
			}
		`};
`;

const CategoryWrapper = () => {
	const { category, nowCategory, setNowCategory } = useCategoryData();

	useEffect(() => {
		console.log("nowCategory : ", nowCategory);
	}, [nowCategory]);

	const handleCategoryClick = (id: string) => {
		if (nowCategory === id) {
			setNowCategory(null);
		} else {
			setNowCategory(id);
		}
	};

	return (
		<Wrapper>
			{category &&
				category.map((el) => {
					return (
						<CategoryList onClick={() => handleCategoryClick(el.id)} key={el.id} active={nowCategory !== null ? el.id === nowCategory : null}>
							<CategoryText text={el.name} type={ParagraphType.LG} color={el.color} />
							<CategoryCount number={el.count} small={true} color={el.color} />
						</CategoryList>
					);
				})}
		</Wrapper>
	);
};

export default CategoryWrapper;
