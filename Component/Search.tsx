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

const CustomeBtnIcon = styled(BtnIcon)``;

const Search = ({ searchInput, onSearch, inputClick, onBlur }) => {
	return (
		<Wrapper>
			<Input {...searchInput} placeholder="" onEnter={onSearch} onFocus={inputClick} onBlur={onBlur} />
			<CustomeBtnIcon icon={"search"} onClick={onSearch} />
		</Wrapper>
	);
};

export default Search;
