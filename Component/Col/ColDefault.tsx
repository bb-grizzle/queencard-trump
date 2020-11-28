import styled from "styled-components";
import { MutableRefObject } from "react";

interface ColDefaultProps {
	col?: number;
	refElement?: MutableRefObject<HTMLDivElement>;
}

const Wrapper = styled.div<{ size: number }>`
	width: ${(props) => `${props.size}%`};
`;

const ColDefault: React.FC<ColDefaultProps> = ({ col = 100, children, refElement }) => {
	return (
		<Wrapper ref={refElement} size={col}>
			{children}
		</Wrapper>
	);
};

export default ColDefault;
