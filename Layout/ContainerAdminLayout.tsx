import styled from "styled-components";
import media from "../Styles/media";
interface ContainerAdminLayoutProps {
	className?: string;
}
const Wrapper = styled.div`
	width: 600px;
	margin: auto;
	max-width: 90%;
	height: 100%;

	@media ${media.tablet} {
		width: 100%;
	}
`;

const ContainerAdminLayout: React.FC<ContainerAdminLayoutProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default ContainerAdminLayout;
