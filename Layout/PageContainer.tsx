import styled from "styled-components";
import media from "../Styles/media";

interface PageContainerProps {
	paddingTop?: boolean;
}

const Wrapper = styled.div<{ paddingTop?: boolean }>`
	padding-top: ${(props) => (props.paddingTop ? `calc(${props.theme.size.header.pc} + 56px)` : props.theme.size.header.pc)};
	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.header.mobile};
	}
	min-height: ${(props) => props.theme.layout.full_height};
`;
const PageContainer: React.FC<PageContainerProps> = ({ children, paddingTop }) => {
	return <Wrapper paddingTop={paddingTop}>{children}</Wrapper>;
};

export default PageContainer;
