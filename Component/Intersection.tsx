import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { checkBrowser } from "../util/checkBrowser";
import { useIsIe } from "../Context/AppProvider";
interface IntersectionProps {
	className?: string;
}
const Wrapper = styled.div<{ active }>`
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity transform;
	transition-duration: 1s;
	${(props) =>
		props.active
			? css`
					opacity: 1;
					transform: translateY(0px);
			  `
			: css`
					opacity: 0;
					transform: translateY(32px);
			  `};
`;
const Intersection: React.FC<IntersectionProps> = ({ children, className }) => {
	const [active, setActive] = useState(false);
	// const { isIe } = useIsIe();

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.2
	});

	useEffect(() => {
		if (inView) {
			setActive(true);
		}
	}, [inView]);

	return (
		<Wrapper ref={ref} active={active} className={className}>
			{children}
		</Wrapper>
	);
};

export default Intersection;
