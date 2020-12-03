import ColDefault from "./ColDefault";
import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import Search from "../Search";
import Footer from "../Footer";
import useSize from "../../Hook/useSize";
import media from "../../Styles/media";
import useInput from "../../Hook/useInput";
import { useState, useEffect } from "react";
import { useSearchValue } from "../../Context/AppProvider";

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
	const searchInput = useInput("");
	const [hideChildren, setHideChildren] = useState(false);
	const { setSearch } = useSearchValue();

	const handleSearch = () => {
		if (!searchInput.value) {
			if (!isTablet) {
			}
			setSearch(null);
		} else {
			setSearch(searchInput.value);
		}
	};

	const inputClick = () => {
		setHideChildren(true);
	};
	const handleFocusOut = () => {
		setHideChildren(false);
	};

	useEffect(() => {
		setHideChildren(false);
	}, [isTablet]);

	return (
		<ColWrapper col={!isTablet ? 25 : 100}>
			<SearchRow>
				{!isTablet && <ColTitle type={ParagraphType.SM} text={"School"} />}
				{!hideChildren && children}
				<Search searchInput={searchInput} onSearch={handleSearch} inputClick={inputClick} onBlur={handleFocusOut} />
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
