import styled, { css } from "styled-components";
import { useCategoryData } from "../../Context/AppProvider";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import Numbering from "../Numbering";
import media from "../../Styles/media";
import useSize from "../../Hook/useSize";
import { useRouter } from "next/router";

const Wrapper = styled.ul`
	margin-bottom: 16px;

	@media ${media.tablet} {
		display: flex;
		align-items: center;
		padding: 16px 0;
		flex-wrap: wrap;
		${(props) => props.theme.layout.hide_scroll};
		margin-bottom: 0;
	}
`;

const CategoryText = styled(Paragraph)`
	margin-right: 4px;
`;

const CategoryCount = styled(Numbering)`
	flex-shrink: 0;
`;

const CategoryList = styled.li<{ active: boolean | null }>`
	display: flex;
	align-items: center;
	padding-right: 24px;
	flex-shrink: 0;

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

	@media ${media.tablet} {
		padding-right: 16px;
	}
`;

const CategoryWrapper = () => {
	const { category, nowCategory, setNowCategory } = useCategoryData();
	const { isTablet } = useSize();

	const handleCategoryClick = (id: string) => {
		setNowCategory((prev) => (!prev.includes(id) ? [...prev, id] : prev.filter((el) => el !== id)));
	};

	return (
		<Wrapper>
			{category &&
				category.map((el) => {
					return (
						<CategoryList onClick={() => handleCategoryClick(el.id)} key={el.id} active={nowCategory.length > 0 ? nowCategory.includes(el.id) : true}>
							<CategoryText text={el.name} type={!isTablet ? ParagraphType.LG : ParagraphType.MD} color={el.color} />
							<CategoryCount number={el.count} small={true} color={el.color} />
						</CategoryList>
					);
				})}
		</Wrapper>
	);
};

export default CategoryWrapper;
