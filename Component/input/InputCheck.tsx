import styled from "styled-components";
import media from "../../Styles/media";
import Label from "./Label";

interface InputCheckProps {
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

const Input = styled.input`
	display: none;
`;

const CheckBtn = styled.label<{ bgColor?: string }>`
	flex-grow: 1;
	cursor: pointer;
	${(props) => props.theme.layout.input_default};
	background-color: ${(props) => (!props.bgColor ? "white" : `${props.bgColor}`)};
	&:focus {
		border: 1px solid black;
	}
	display: flex;
	align-items: center;
	@media ${media.tablet} {
		height: ${(props) => props.theme.size.height_input_mobile};
	}
`;

const Text = styled.p``;

const InputCheck: React.FC<InputCheckProps> = ({ value, onChange, label, placeholder, bgColor }) => {
	return (
		<Wrapper>
			<Label label={label} />
			<CheckBtn bgColor={bgColor}>
				<Text>{value ? "높이 x2" : "높이 x1"}</Text>
				<Input onChange={onChange} placeholder={placeholder} type={"checkbox"} />
			</CheckBtn>
		</Wrapper>
	);
};

export default InputCheck;
