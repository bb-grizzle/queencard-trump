import styled from "styled-components";
import media from "../Styles/media";

interface ContainerLayoutProps {
	className?: string;
}
const Wrapper = styled.div`
	width: 1200px;
	margin: auto;
	max-width: 90%;
	height: 100%;

	@media ${media.tablet} {
		max-width: initial;
		width: calc(100% - 16px);
	}
`;

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default ContainerLayout;
