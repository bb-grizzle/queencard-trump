import styled from "styled-components";
import media from "../../Styles/media";
import Label from "./Label";

interface InputTextAreaProps {
	value: string;
	onChange: any;
	label: string;
	placeholder: string;
	bgColor?: string;
	name?: string;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
	height: ${(props) => `calc(${props.theme.size.height_input} * 5)`};
	position: relative;

	@media ${media.tablet} {
		flex-direction: column;
		height: auto;
	}
`;

const Input = styled.textarea<{ bgColor?: string }>`
	flex-grow: 1;

	${(props) => props.theme.layout.input_default};
	background-color: ${(props) => (!props.bgColor ? "white" : `${props.bgColor}`)};
	padding-top: 8px;
	&:focus {
		border: 1px solid black;
	}

	@media ${media.tablet} {
		height: ${(props) => `calc(${props.theme.size.height_input_mobile} * 4)`};
		padding: 8px 12px;
	}
`;

const InputTextArea: React.FC<InputTextAreaProps> = ({ value, onChange, label, placeholder, bgColor, name }) => {
	return (
		<Wrapper>
			<Label label={label} />
			<Input value={value} name={name} onChange={onChange} placeholder={placeholder} bgColor={bgColor} />
		</Wrapper>
	);
};

export default InputTextArea;
