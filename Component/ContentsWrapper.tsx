import styled from "styled-components";

const Contents = styled.div`
	margin-top: ${(props) => props.theme.size.padding_top_contents.pc};
`;
const ContentsWrapper = ({ children }) => {
	return <Contents>{children}</Contents>;
};

export default ContentsWrapper;
