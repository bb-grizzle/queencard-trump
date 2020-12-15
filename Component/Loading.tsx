import styled, { css } from "styled-components";
import { useLoading, useIsIe } from "../Context/AppProvider";
import { useEffect } from "react";
import { preventScroll, activeScroll } from "../util/scroll";
import Logo from "./Logo";

const Wrapper = styled.div<{ active: boolean; isIe: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	height: ${(props) => props.theme.size.full_height};

	${(props) =>
		props.isIe
			? css`
					background-color: ${(props) => props.theme.color.white};
			  `
			: css`
					background-color: rgba(255, 255, 255, 0.3);
					backdrop-filter: blur(12px);
			  `};

	${(props) => props.theme.layout.center_flex};
	opacity: ${(props) => (props.active ? "1" : "0")};
	z-index: ${(props) => props.theme.zIndex.loading};
	transition: ${(props) => props.theme.transition.default};

	${(props) => (props.active ? props.theme.event.active : props.theme.event.disable)};
`;

const LogoCustome = styled(Logo)`
	${(props) => props.theme.event.disable};
`;

const Loading: React.FC = () => {
	const { loading } = useLoading();

	useEffect(() => {
		if (loading) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [loading]);
	const { isIe } = useIsIe();

	return (
		<Wrapper active={loading} isIe={isIe}>
			<LogoCustome />
		</Wrapper>
	);
};

export default Loading;
