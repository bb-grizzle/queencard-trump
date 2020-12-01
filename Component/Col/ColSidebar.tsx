import ColDefault from "./ColDefault";
import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import Search from "../Search";
import Footer from "../Footer";

const ColWrapper = styled(ColDefault)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ColTitle = styled(Paragraph)`
	font-size: 24px;
	color: ${(props) => props.theme.color.main};
	margin-bottom: 40px;
`;

const CustomFooter = styled(Footer)``;
const Row = styled.div``;

const ColSidebar: React.FC = ({ children }) => {
	return (
		<ColWrapper col={25}>
			<Row>
				<ColTitle type={ParagraphType.SM} text={"School"} />
				{children}
				<Search />
			</Row>
			<Row>
				<CustomFooter />
			</Row>
		</ColWrapper>
	);
};

export default ColSidebar;
