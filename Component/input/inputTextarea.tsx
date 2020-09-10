import styled from "styled-components";

interface InputTextAreaProps {
	value: string;
	onChange: any;
	label: string;
	placeholder: string;
	bgColor?: string;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
	height: ${(props) => `calc(${props.theme.size.height_input} * 5)`};
	position: relative;
`;

const Label = styled.label`
	flex-grow: 0;
	flex-basis: 200px;
	text-transform: capitalize;
	line-height: 36px;

	font-size: 16px;
`;

const Input = styled.textarea<{ bgColor?: string }>`
	flex-grow: 1;

	${(props) => props.theme.layout.input_default};
	background-color: ${(props) => (!props.bgColor ? "white" : `${props.bgColor}`)};

	&:focus {
		border: 1px solid black;
	}
`;

const InputTextArea: React.FC<InputTextAreaProps> = ({ value, onChange, label, placeholder, bgColor }) => {
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input value={value} onChange={onChange} placeholder={placeholder} bgColor={bgColor} />
		</Wrapper>
	);
};

export default InputTextArea;
