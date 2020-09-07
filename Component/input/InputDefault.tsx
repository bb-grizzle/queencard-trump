import styled from "styled-components";

interface InputDefaultProps {
	value: string;
	onChange: any;
	label: string;
	placeholder: string;
	type?: string;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
	height: ${(props) => props.theme.size.height_input};
	position: relative;
`;

const Label = styled.label`
	flex-grow: 0;
	flex-basis: 200px;
	text-transform: capitalize;
	line-height: 36px;

	font-size: 16px;
`;

const Input = styled.input`
	flex-grow: 1;

	${(props) => props.theme.layout.input_default};

	&:focus {
		border: 1px solid black;
	}
`;

const InputDefault: React.FC<InputDefaultProps> = ({ value, onChange, label, placeholder, type }) => {
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input value={value} onChange={onChange} placeholder={placeholder} type={type} />
		</Wrapper>
	);
};

export default InputDefault;
