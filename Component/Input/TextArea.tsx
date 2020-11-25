import styled from "styled-components";

interface TextAreaProps {
	value: string;
	onChange: any;
	placeholder: string;
	className?: string;
}
const Wrapper = styled.div`
	${(props) => props.theme.style.textarea};
	width: 100%;
`;

const Input = styled.textarea``;

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder, className }) => {
	return (
		<Wrapper className={className}>
			<Input value={value} onChange={onChange} placeholder={placeholder} />
		</Wrapper>
	);
};

export default TextArea;
