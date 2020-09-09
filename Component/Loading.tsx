import styled, { keyframes } from "styled-components";
import { useLoading } from "../Context/AppProvider";

const slideUp = keyframes`
	from{
		transform:  translateY(0);
	}
	
	to{
		transform: translateY(-100%);
	}
`;

const Wrapper = styled.div<{ active: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	${(props) => props.theme.layout.full_height};
	background-color: white;
	${(props) => props.theme.layout.center_flex};
	transform: ${(props) => (props.active ? "translateY(0)" : "translateY(-100%)")};
	opacity: 1;
	z-index: ${(props) => props.theme.zIndex.loading};
	transition: ${(props) => props.theme.transition.default};
`;

const Text = styled.p`
	color: ${(props) => props.theme.color.gray.default};
	font-size: 20px;
	text-transform: uppercase;
	font-style: italic;
`;

const Loading: React.FC = () => {
	const active = useLoading();
	return (
		<Wrapper active={active}>
			<Text> loading...</Text>
		</Wrapper>
	);
};

export default Loading;
