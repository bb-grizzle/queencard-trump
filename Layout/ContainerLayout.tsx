import styled from "styled-components";

interface ContainerLayoutProps {
	className?: string;
}
const Wrapper = styled.div`
	width: 1200px;
	margin: auto;
	max-width: 90%;
	height: 100%;
`;

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default ContainerLayout;
