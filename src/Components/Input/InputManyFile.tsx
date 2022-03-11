import styled from "styled-components";
import media from "../../Styles/media";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import BtnIcon from "../Btn/BtnIcon";
import { Dispatch, SetStateAction } from "react";
interface InputManyFileProps {
	files: any[];
	onChange: (e: any) => void;
	className?: string;
	setFiles: Dispatch<SetStateAction<any[]>>;
	setDeleteFiles: Dispatch<any>;
}

const Wrapper = styled.div`
	width: 100%;
	${(props) => props.theme.componentStyle.input.layout};
`;

const Input = styled.input`
	display: none;
`;

const Label = styled.label`
	border: 1px solid ${(props) => props.theme.color.gray[500]};
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
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
const FileWrapper = styled.ul`
	display: flex;
	margin-bottom: 24px;
`;

const FileList = styled.li<{ image: string }>`
	${(props) => props.theme.layout.ratio(100)};
	${(props) => props.theme.layout.full_image(props.image)};
	background-size: contain;
	background-repeat: no-repeat;
	background-color: ${(props) => props.theme.color.gray[200]};
	margin-right: 8px;
	width: 6%;
	min-width: 48px;
	position: relative;
`;
const BtnClose = styled(BtnIcon)`
	position: absolute;
	top: 4px;
	right: 4px;
	${(props) => props.theme.layout.center_flex};
`;

const InputManyFile: React.FC<InputManyFileProps> = ({ files, onChange, className, setFiles, setDeleteFiles }) => {
	const handleDeleteClick = (index: number) => {
		setFiles((prev) =>
			prev.filter((el, i) => {
				if (i !== index) {
					return el;
				} else {
					if (!!el.prevUrl) {
						setDeleteFiles((files) => (Array.isArray(files) ? [...files, el.prevUrl] : [el.prevUrl]));
					}
				}
			})
		);
	};

	return (
		<Wrapper className={className}>
			<FileWrapper>
				{files &&
					files.map((el, index) => {
						return (
							<FileList key={index} image={el.url}>
								<BtnClose icon={"close"} size={16} onClick={() => handleDeleteClick(index)} />
							</FileList>
						);
					})}
				<FileList image={""}>
					<Label>
						<Input type={"file"} onChange={onChange} />
						<Text text={"파일첨부"} type={ParagraphType.SM} />
					</Label>
				</FileList>
			</FileWrapper>
		</Wrapper>
	);
};

export default InputManyFile;
