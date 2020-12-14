import styled from "styled-components";
import InputDefault from "./Input/InputDefault";
import BtnIcon from "./Btn/BtnIcon";
import media from "../Styles/media";
import { useSearchValue } from "../Context/AppProvider";
const Wrapper = styled.div`
	display: flex;
	flex-shrink: 0;
`;

const Input = styled(InputDefault)`
	width: 110px;
	padding: 0;
	border-bottom: 1.5px solid ${(props) => props.theme.color.main};

	> input {
		color: ${(props) => props.theme.color.gray.dark};
		padding: 0;
		height: 100%;
		border: 0px;
	}

	@media ${media.tablet} {
		width: 100%;
		margin-top: 4px;
	}
`;

const CustomeBtnIcon = styled(BtnIcon)``;

const Search = ({ searchInput, onSearch, onClose, inputClick, onBlur }) => {
	const { search } = useSearchValue();
	return (
		<Wrapper>
			<Input {...searchInput} placeholder="" onEnter={onSearch} onFocus={inputClick} onBlur={onBlur} />
			<CustomeBtnIcon icon={"search"} onClick={onSearch} />
			{search !== null && <CustomeBtnIcon icon={"close"} onClick={onClose} />}
		</Wrapper>
	);
};

export default Search;
