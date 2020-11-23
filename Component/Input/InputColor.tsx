import styled from "styled-components";
import { Dispatch } from "react";
import media from "../../Styles/media";
interface InputColorProps {
	value: string;
	onChange: Dispatch<any>;
	className?: string;
}
const Wrapper = styled.div`
	width: 100%;
	${(props) => props.theme.style.input};
	border-bottom: 1px solid ${(props) => props.theme.color.black};
	display: flex;
	justify-content: space-between;
`;

const Input = styled.input`
	-webkit-appearance: none;
	border: none;
	width: 200%;
	height: 50px;
	&::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	&::-webkit-color-swatch {
		border: none;
	}
	cursor: pointer;
`;

const ColorPicker = styled.div`
	border-radius: 100px;
	width: 24px;
	height: 24px;
	overflow: hidden;
	${(props) => props.theme.layout.center_flex};
	cursor: pointer;
`;

const InputColor: React.FC<InputColorProps> = ({ value, onChange, className }) => {
	return (
		<Wrapper className={className}>
			<ColorPicker>
				<Input type={"color"} value={value} onChange={onChange} />
			</ColorPicker>
		</Wrapper>
	);
};

export default InputColor;
