import { ReactNode } from "react";
import styled from "styled-components";

interface InputItemWrapperProps {
	children: ReactNode;
	className?: string;
}

const Wrapper = styled.div`
	border: 1px solid black;
	height: 48px;
	border-radius: 8px;
	padding: 8px;
	${(props) => props.theme.layout.center_flex};
`;

const InputItemWrapper: React.FC<InputItemWrapperProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default InputItemWrapper;
