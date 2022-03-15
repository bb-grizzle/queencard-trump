import styled from "styled-components";
import media from "../Styles/media";

interface ContainerLayoutProps {
	className?: string;
}
const Wrapper = styled.div`
	width: ${(props) => props.theme.size.container.pc};
	margin: auto;
	max-width: 90%;
	height: 100%;

	@media ${media.tablet} {
		max-width: initial;
		width: ${(props) => ` calc(100% - ${props.theme.size.offset.tablet * 2}px);`};
	}
`;

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default ContainerLayout;