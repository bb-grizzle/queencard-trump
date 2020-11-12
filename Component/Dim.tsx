import styled from "styled-components";
interface DimProps {
	active: boolean;
	className?: string;
}
const Wrapper = styled.div<{ active: boolean }>`
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.color.dim};
	opacity: ${(props) => (props.active ? 1 : 0)};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
	${(props) => props.theme.event.diable};
`;

const Dim: React.FC<DimProps> = ({ active, className }) => {
	return <Wrapper className={className} active={active} />;
};

export default Dim;
