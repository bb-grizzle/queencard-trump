import styled from "styled-components";
import { Dispatch } from "react";
import media from "../../Styles/media";
import InputLayout from "./InputLayout";
interface InputColorProps {
	label?: string;
	value: string;
	onChange: Dispatch<any>;
	className?: string;
	initStyle?: boolean;
}
const Wrapper = styled.div<{ initStyle?: boolean }>`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${(props) => props.theme.componentStyle.input.item};
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

const InputColor: React.FC<InputColorProps> = ({ label, value, onChange, className, initStyle }) => {
	return (
		<InputLayout label={label} initStyle={initStyle} className={className}>
			<Wrapper initStyle={initStyle}>
				<ColorPicker>
					<Input type={"color"} value={value} onChange={(e) => onChange(e.target.value)} />
				</ColorPicker>
			</Wrapper>
		</InputLayout>
	);
};

export default InputColor;
