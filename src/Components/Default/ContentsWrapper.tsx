import styled from "styled-components";
import media from "../../Styles/media";

const Contents = styled.div`
	margin-top: ${(props) => `${props.theme.size.padding_top_contents.pc}px`};
	@media ${media.tablet} {
		margin-top: ${(props) => `${props.theme.size.padding_top_contents.tablet}px`};
	}
`;
const ContentsWrapper = ({ children }) => {
	return <Contents>{children}</Contents>;
};

export default ContentsWrapper;
