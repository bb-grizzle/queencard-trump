import useGlobalDim from "@/provider/AppProvider/useGlobalDim";
import styled from "styled-components";

const Dim = styled.div<{ active: boolean }>`
	${(props) => props.theme.layout.full_abs};
	height: ${(props) => props.theme.size.full_height};
	position: fixed;
	z-index: ${(props) => props.theme.zIndex.dim};
	background-color: ${(props) => props.theme.color.dim};
	opacity: ${(props) => (props.active ? 1 : 0)};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
	${(props) => (props.active ? props.theme.event.active : props.theme.event.disable)};
`;

const GlobalDim = () => {
	const { isActive, onDimClick } = useGlobalDim();
	return <Dim active={isActive} onClick={onDimClick} />;
};

export default GlobalDim;
