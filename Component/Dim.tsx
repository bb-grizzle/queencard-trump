import styled, { css } from "styled-components";

export enum DimType {
	MIN = "min",
	MAX = "max"
}
interface DimProps {
	active: boolean;
	className?: string;
	type?: DimType;
	blur?: boolean;
}
const Wrapper = styled.div<{ active: boolean; type: DimType; blur: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: ${(props) => props.theme.size.full_height};
	opacity: ${(props) => (props.active ? 1 : 0)};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
	${(props) => props.theme.event.disable};
	z-index: ${(props) => (props.type === DimType.MAX ? props.theme.zIndex.dim.max : props.theme.zIndex.dim.min)};
	${(props) =>
		props.blur
			? css`
					background-color: rgba(255, 255, 255, 0.3);
					backdrop-filter: blur(12px);
			  `
			: css`
					background-color: ${(props) => props.theme.color.dim};
			  `};
`;

const Dim: React.FC<DimProps> = ({ active, className, type = DimType.MIN, blur = false }) => {
	return <Wrapper className={className} active={active} type={type} blur={blur} />;
};

export default Dim;
