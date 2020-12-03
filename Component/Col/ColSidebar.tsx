import ColDefault from "./ColDefault";
import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import Search from "../Search";
import Footer from "../Footer";
import useSize from "../../Hook/useSize";
import media from "../../Styles/media";

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

const SearchRow = styled(Row)`
	display: flex;
	flex-direction: column;
	@media ${media.tablet} {
		flex-direction: column-reverse;
		/* align-items: center; */
		margin-bottom: 16px;
	}
`;

const ColSidebar: React.FC = ({ children }) => {
	const { isTablet } = useSize();
	return (
		<ColWrapper col={!isTablet ? 25 : 100}>
			<SearchRow>
				{!isTablet && <ColTitle type={ParagraphType.SM} text={"School"} />}
				{children}
				<Search />
			</SearchRow>

			{!isTablet && (
				<Row>
					<CustomFooter />
				</Row>
			)}
		</ColWrapper>
	);
};

export default ColSidebar;
