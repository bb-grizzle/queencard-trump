import styled from "styled-components";
import useInput from "../Hook/useInput";
import InputDefault from "./Input/InputDefault";
import BtnIcon from "./Btn/BtnIcon";
const Wrapper = styled.div`
	display: flex;
`;

const Input = styled(InputDefault)`
	width: 78px;
	padding: 0;
	border-color: ${(props) => props.theme.color.main};
	border-width: 1.5px;
	margin-right: 2px;
`;

const Search = () => {
	const searchInput = useInput("");

	const handleSearch = () => {
		console.log("test");
	};

	return (
		<Wrapper>
			<Input {...searchInput} placeholder="" onEnter={handleSearch} />
			<BtnIcon icon={"search"} onClick={handleSearch} />
		</Wrapper>
	);
};

export default Search;
