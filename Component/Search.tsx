import styled from "styled-components";
import useInput from "../Hook/useInput";
import InputDefault from "./Input/InputDefault";
import BtnIcon from "./Btn/BtnIcon";
import media from "../Styles/media";
const Wrapper = styled.div`
	display: flex;
	flex-shrink: 0;
`;

const Input = styled(InputDefault)`
	width: 78px;
	padding: 0;
	border-color: ${(props) => props.theme.color.main};
	border-width: 1.5px;
	margin-right: 2px;

	@media ${media.tablet} {
		width: 100%;
	}
`;

const CustomeBtnIcon = styled(BtnIcon)<{ active }>`
	@media ${media.tablet} {
		margin-left: ${(props) => props.active && "12px"};
	}
`;

const BtnClose = styled(CustomeBtnIcon)<{ active }>`
	display: ${(props) => (props.active ? `block` : `none`)};
`;

const Search = () => {
	const searchInput = useInput("");

	const handleSearch = () => {
		console.log("searchPortfolio");
	};

	return (
		<Wrapper>
			<Input {...searchInput} placeholder="" onEnter={handleSearch} />
			<CustomeBtnIcon icon={"search"} onClick={handleSearch} />
		</Wrapper>
	);
};

export default Search;
