import Loading from "@/components/shared/Loading";
import { transition } from "@/styles/theme/transition";
import { ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

let timeout = setTimeout(() => {}, 0);

interface LoadingLayoutProps {
	children: ReactNode;
	loading: boolean;
}

const Wrapper = styled.section``;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1
  }
`;

const LoadingCustom = styled(Loading)<{ active: boolean }>`
	${(props) => props.theme.layout.center_abs};
	animation-name: ${fadeInAnimation};
	animation-duration: ${(props) => props.theme.transition.default_time}s;
	animation-timing-function: ${(props) => props.theme.transition.default_easing};

	opacity: ${(props) => (props.active ? 1 : 0)};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
`;

const ChildrenWrapper = styled.div<{ active: boolean }>`
	opacity: ${(props) => (props.active ? 1 : 0)};
	animation-name: ${fadeInAnimation};
	animation-duration: ${(props) => props.theme.transition.default_time}s;
	animation-timing-function: ${(props) => props.theme.transition.default_easing};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
`;

const LoadingLayout: React.FC<LoadingLayoutProps> = ({ children, loading }) => {
	const [currentLoading, setCurrentLoading] = useState<boolean>(loading);

	useEffect(() => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setCurrentLoading(loading);
		}, transition.default_time * 1000);
	}, [loading]);

	return <Wrapper>{currentLoading ? <LoadingCustom active={loading} /> : <ChildrenWrapper active={!loading}>{children}</ChildrenWrapper>}</Wrapper>;
};

export default LoadingLayout;
