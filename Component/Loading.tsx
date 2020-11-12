import styled from "styled-components";
import { useLoading } from "../Context/AppProvider";

const Wrapper = styled.div<{ active: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: ${(props) => props.theme.layout.full_height};
	background-color: ${(props) => props.theme.color.bg};
	${(props) => props.theme.layout.center_flex};
	opacity: ${(props) => (props.active ? "1" : "0")};
	z-index: ${(props) => props.theme.zIndex.loading};
	transition: ${(props) => props.theme.transition.default};

	${(props) => props.theme.style.event_disable};
`;

const Text = styled.p`
	color: ${(props) => props.theme.color.gray.default};
	font-size: 20px;
	text-transform: uppercase;
	font-style: italic;
`;

const Loading: React.FC = () => {
	const { loading } = useLoading();
	return (
		<Wrapper active={loading}>
			<Text> loading...</Text>
		</Wrapper>
	);
};

export default Loading;
