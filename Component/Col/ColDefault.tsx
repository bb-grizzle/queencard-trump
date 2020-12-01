import styled from "styled-components";
import { MutableRefObject } from "react";

interface ColDefaultProps {
	col?: number;
	refElement?: MutableRefObject<HTMLDivElement>;
	className?: string;
}

const Wrapper = styled.div<{ size: number }>`
	width: ${(props) => `${props.size}%`};
`;

const ColDefault: React.FC<ColDefaultProps> = ({ col = 100, children, refElement, className }) => {
	return (
		<Wrapper ref={refElement} size={col} className={className}>
			{children}
		</Wrapper>
	);
};

export default ColDefault;
