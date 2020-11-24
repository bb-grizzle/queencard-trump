import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import media from "../../Styles/media";
interface InputFileProps {
	onChange: any;
	fileName: string;
	className?: string;
}
const Wrapper = styled.div`
	width: 100%;
	${(props) => props.theme.style.input};
`;

const Input = styled.input`
	display: none;
`;

const Label = styled.label`
	border: 1px solid ${(props) => props.theme.color.gray.dark};
	display: block;
	width: 120px;
	height: 35px;
	${(props) => props.theme.layout.center_flex};
	cursor: pointer;
	@media ${media.hover} {
		&:hover {
			background-color: ${(props) => props.theme.color.main};
		}
	}

	@media ${media.tablet} {
		width: 100%;
	}
`;

const Text = styled(Paragraph)`
	margin-top: 0 !important;
	line-height: 1.4;
	position: relative;
	top: -1px;
`;

const InputFile: React.FC<InputFileProps> = ({ onChange, fileName, className }) => {
	return (
		<Wrapper className={className}>
			<Label>
				<Input type={"file"} onChange={onChange} />
				<Text text={fileName ? fileName : "파일첨부"} type={ParagraphType.SM} />
			</Label>
		</Wrapper>
	);
};

export default InputFile;
