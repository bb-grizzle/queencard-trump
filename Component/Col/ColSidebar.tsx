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
import { useRouter } from "next/router";

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
		margin-bottom: 16px;
		position: static;
	}
`;

const RowEmpty = styled(Row)`
	flex-grow: 1;
	position: initial;
`;

const ColSidebar: React.FC = ({ children }) => {
	const { isTablet } = useSize();
	const searchInput = useInput("");
	const [hideChildren, setHideChildren] = useState(false);
	const { setSearch, search } = useSearchValue();

	const handleSearch = () => {
		if (!searchInput.value) {
			setSearch(null);
		} else {
			setSearch(searchInput.value);
		}
	};

	const handleOnClose = () => {
		if (search !== null) {
			setSearch(null);
			setHideChildren(false);
			searchInput.init();
		}
	};

	const inputClick = () => {
		console.log("inputClick");
		if (!isTablet) {
			setHideChildren(true);
		}
	};
	const handleFocusOut = () => {
		// setHideChildren(false);
	};

	useEffect(() => {
		setHideChildren(false);
	}, [isTablet]);

	return (
		<ColWrapper col={!isTablet ? 25 : 100}>
			<SearchRow>
				{!isTablet && <ColTitle type={ParagraphType.SM} text={"School"} />}
				{!hideChildren && children}
				<Search searchInput={searchInput} onSearch={handleSearch} inputClick={inputClick} onBlur={handleFocusOut} onClose={handleOnClose} />
			</SearchRow>
			<RowEmpty />

			{!isTablet && (
				<Row>
					<CustomFooter />
				</Row>
			)}
		</ColWrapper>
	);
};

export default ColSidebar;
