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
	border-color: ${(props) => props.theme.color.main};
	border-width: 1.5px;
	margin-right: 2px;

	@media ${media.tablet} {
		width: 100%;
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
