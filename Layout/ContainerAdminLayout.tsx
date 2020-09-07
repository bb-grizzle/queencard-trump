import styled from "styled-components";
interface ContainerAdminLayoutProps {
	className?: string;
}
const Wrapper = styled.div`
	width: 600px;
	margin: auto;
	max-width: 90%;
	height: 100%;
`;

const ContainerAdminLayout: React.FC<ContainerAdminLayoutProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default ContainerAdminLayout;
