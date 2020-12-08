import styled from "styled-components";
interface InputLayoutProps {
	label?: string;
	className?: string;
	initStyle?: boolean;
}
const Wrapper = styled.div<{ initStyle?: boolean }>`
	display: flex;
	flex-direction: column;
	${(props) => props.theme.style.input.layout(props.initStyle)};
`;

const Label = styled.label`
	display: block;
`;

const InputLayout: React.FC<InputLayoutProps> = ({ children, label, className, initStyle }) => {
	return (
		<Wrapper className={className} initStyle={initStyle}>
			{!!label && <Label>{label}</Label>}
			{children}
		</Wrapper>
	);
};

export default InputLayout;
