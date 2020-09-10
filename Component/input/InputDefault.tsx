import styled from "styled-components";
import media from "../../Styles/media";
import Label from "./Label";

interface InputDefaultProps {
	value: string;
	onChange: any;
	label: string;
	placeholder: string;
	type?: string;
	bgColor?: string;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
	height: ${(props) => props.theme.size.height_input};
	position: relative;

	@media ${media.tablet} {
		flex-direction: column;
		height: auto;
	}
`;

const Input = styled.input<{ bgColor?: string }>`
	flex-grow: 1;

	${(props) => props.theme.layout.input_default};
	background-color: ${(props) => (!props.bgColor ? "white" : `${props.bgColor}`)};

	&:focus {
		border: 1px solid black;
	}
	height: ${(props) => props.theme.size.height_input_mobile};
`;

const InputDefault: React.FC<InputDefaultProps> = ({ value, onChange, label, placeholder, type, bgColor }) => {
	return (
		<Wrapper>
			<Label label={label} />
			<Input value={value} onChange={onChange} placeholder={placeholder} type={type} bgColor={bgColor} />
		</Wrapper>
	);
};

export default InputDefault;
