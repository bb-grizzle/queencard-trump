import styled from "styled-components";
import InputLayout from "./InputLayout";

interface TextAreaProps {
	value: string;
	onChange: any;
	placeholder: string;
	className?: string;
	label?: string;
	initStyle?: boolean;
}
const Wrapper = styled.div<{ initStyle?: boolean }>`
	${(props) => props.theme.componentStyle.input.item};
	${(props) => props.theme.componentStyle.textarea};
	width: 100%;
`;

const Input = styled.textarea`
	display: block;
`;

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder, className, initStyle }) => {
	const handleChange = (e) => {
		onChange(e.target.value);
	};
	return (
		<InputLayout label={label} className={className} initStyle={initStyle}>
			<Wrapper initStyle={initStyle}>
				<Input value={value} onChange={handleChange} placeholder={placeholder} />
			</Wrapper>
		</InputLayout>
	);
};

export default TextArea;
