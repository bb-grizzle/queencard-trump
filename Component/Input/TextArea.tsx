import styled from "styled-components";
import media from "../../Styles/media";

interface TextAreaProps {
	value: string;
	onChange: any;
	placeholder: string;
}
const Wrapper = styled.div`
	${(props) => props.theme.style.textarea};
	width: 100%;
`;

const Input = styled.textarea``;

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder }) => {
	return (
		<Wrapper>
			<Input value={value} onChange={onChange} placeholder={placeholder} />
		</Wrapper>
	);
};

export default TextArea;
