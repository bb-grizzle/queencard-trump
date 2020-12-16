import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import media from "../../Styles/media";
import InputLayout from "./InputLayout";
interface InputFileProps {
	onChange: any;
	fileName: string;
	className?: string;
	label?: string;
	accept?: string;
}
const Wrapper = styled.div`
	width: 100%;
	${(props) => props.theme.style.input.item()};
	color: ${(props) => props.theme.color.black};
	border-top: 0;
	text-align: left;
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

const FileName = styled(Paragraph)`
	margin-bottom: 22px;
`;
const Text = styled(Paragraph)`
	margin-top: 0 !important;
	line-height: 1.4;
	position: relative;
	top: -1px;
`;

const InputFile: React.FC<InputFileProps> = ({ onChange, fileName, className, label, accept = "image/x-png,image/gif,image/jpeg" }) => {
	return (
		<InputLayout label={label}>
			<Wrapper className={className}>
				{fileName && <FileName text={fileName} type={ParagraphType.SM} />}
				<Label>
					<Input type={"file"} onChange={onChange} accept={accept} />
					<Text text={"파일 업로드"} type={ParagraphType.SM} />
				</Label>
			</Wrapper>
		</InputLayout>
	);
};

export default InputFile;
