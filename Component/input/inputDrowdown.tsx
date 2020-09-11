import styled from "styled-components";
import Label from "./Label";
import media from "../../Styles/media";

interface InputDropdownProps {
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

const Input = styled.div<{ bgColor?: string }>`
	flex-grow: 1;
	${(props) => props.theme.layout.input_default};
	background-color: ${(props) => (!props.bgColor ? "white" : `${props.bgColor}`)};

	display: block;

	&:focus {
		border: 1px solid black;
	}

	@media ${media.tablet} {
		height: ${(props) => props.theme.size.height_input_mobile};
	}
`;

const Select = styled.select`
	width: 100%;
	background: transparent;
	height: 100%;
	position: relative;
	left: -4px;
	font-family: inherit;
	font-size: inherit;
`;

const InputDropdown: React.FC<InputDropdownProps> = ({ value, onChange, label, bgColor }) => {
	return (
		<Wrapper>
			<Label label={label} />
			<Input bgColor={bgColor}>
				<Select onChange={onChange} value={value}>
					<option value="EDUCATION">Education</option>
					<option value="EXHIBITION">Exhibition</option>
					<option value="AWARD">Award</option>
				</Select>
			</Input>
		</Wrapper>
	);
};

export default InputDropdown;
