import { ReactNode } from "react";
import styled from "styled-components";

interface InputItemWrapperProps {
	children: ReactNode;
	className?: string;
}

const Wrapper = styled.div`
	border: 1px solid black;
`;

const InputItemWrapper: React.FC<InputItemWrapperProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default InputItemWrapper;
