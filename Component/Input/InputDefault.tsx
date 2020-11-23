import styled from "styled-components";
interface InputDefaultProps {
	value: string;
	onChange: any;
	type?: string;
	placeholder: string;
	className?: string;
}
const Wrapper = styled.div`
	width: 100%;

	${(props) => props.theme.style.input};
	border-bottom: 1px solid ${(props) => props.theme.color.black};
`;

const Input = styled.input``;

const InputDefault: React.FC<InputDefaultProps> = ({ value, onChange, type = "text", placeholder, className }) => {
	return (
		<Wrapper className={className}>
			<Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
		</Wrapper>
	);
};

export default InputDefault;
