import styled from "styled-components";
import media from "../../Styles/media";
import Label from "./Label";

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
	${(props) => props.theme.layout.input_default};

	display: none;
	&:focus {
		border: 1px solid black;
	}

	@media ${media.tablet} {
		height: ${(props) => props.theme.size.height_input_mobile};
	}
`;
const RadioWrapper = styled.div`
	display: flex;
	flex-grow: 1;
`;
const RadioButton = styled.label<{ active?: boolean }>`
	flex-grow: 1;
	${(props) => props.theme.layout.center_flex};
	cursor: pointer;
	background-color: ${(props) => (!props.active ? "white" : props.theme.color.black)};
	color: ${(props) => (!props.active ? props.theme.color.black : props.theme.color.white)};
	${(props) => props.theme.layout.input_default};
	box-sizing: border-box;

	&:hover {
		background-color: ${(props) => !props.active && props.theme.color.bg};
	}
`;
interface InputRadioProps {
	label: string;
	value: string;
	onChange: any;
	radios: string[];
	name?: string;
}

const InputRadio: React.FC<InputRadioProps> = ({ label, value, onChange, radios, name }) => {
	return (
		<Wrapper>
			<Label label={label} />
			<RadioWrapper>
				{radios.map((el) => {
					return (
						<RadioButton key={el} active={el === value ? true : false}>
							{el}
							<Input value={el} type={"radio"} onChange={onChange} name={name} />
						</RadioButton>
					);
				})}
			</RadioWrapper>
		</Wrapper>
	);
};

export default InputRadio;
