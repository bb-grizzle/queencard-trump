import ColDefault from "./ColDefault";
import Title, { TitleType } from "../Text/Title";
import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import Search from "../Search";

const ColTitle = styled(Paragraph)`
	font-size: 24px;
	color: ${(props) => props.theme.color.main};
	margin-bottom: 40px;
`;

const ColSidebar: React.FC = ({ children }) => {
	return (
		<ColDefault col={25}>
			<ColTitle type={ParagraphType.SM} text={"School"} />
			{children}
			<Search />
		</ColDefault>
	);
};

export default ColSidebar;
