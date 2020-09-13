import styled from "styled-components";
import media from "../Styles/media";

const Wrapper = styled.div`
	padding-top: ${(props) => props.theme.size.header.pc};
	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.header.mobile};
		margin-top: 16px;
	}
	min-height: ${(props) => props.theme.layout.full_height};
`;
const PageContainer = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default PageContainer;
