import styled from "styled-components";
import Paragraph from "../Text/Paragraph";
import media from "../../Styles/media";
interface CategoryListProps {
	name: string;
	color: string;
	col: number;
	onClick: () => void;
}

const Wrapper = styled.li<{ width: number; color: string }>`
	width: ${(props) => `${props.width}%`};
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 8px;
	border-radius: 8px;
	border: 1px solid ${(props) => props.color};
	border-width: 0px;

	@media ${media.hover} {
		&:hover {
			border-width: 1px;
		}
	}
`;

const Color = styled.div<{ color: string }>`
	width: 32px;
	height: 32px;
	background-color: ${(props) => `${props.color}`};
	border-radius: 100%;
	margin-right: 16px;
`;

const CategoryList: React.FC<CategoryListProps> = ({ name, color, col, onClick }) => {
	return (
		<Wrapper width={100 / col} color={color} onClick={onClick}>
			<Color color={color} />
			<Paragraph text={name} />
		</Wrapper>
	);
};

export default CategoryList;
