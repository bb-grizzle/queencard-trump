import styled from "styled-components";
import Icon from "../../Asset/icon";

interface InputFileProps {
	label: string;
	value: string;
	onChange: any;
	bgColor?: string;
	files: any;
	onThumbnailClick: any;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	position: relative;
`;

const Label = styled.label`
	flex-grow: 0;
	flex-basis: 200px;
	text-transform: capitalize;
	line-height: 36px;

	font-size: 16px;
`;

const Input = styled.input`
	display: none;
	&:focus {
		border: 1px solid black;
	}
`;

const Col = styled.div`
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
`;

const FileBtn = styled.label<{ bgColor?: string }>`
	position: relative;
	background-color: ${(props) => `${props.bgColor ? props.bgColor : "white"}`};
	width: 33.3%;
	${(props) => props.theme.style.ratio()};
	display: block;
	${(props) => props.theme.layout.input_default};
	color: ${(props) => props.theme.color.gray.default};
	cursor: pointer;
	&:hover {
		border: 1px solid black;
	}
`;

const BoxInner = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding: 8px;
`;

const BoxInnerBtn = styled(BoxInner)`
	${(props) => props.theme.layout.center_flex};
`;

const BoxInnerThumb = styled(BoxInner)`
	display: flex;
	justify-content: flex-end;
`;

const Thumbnail = styled.div<{ url: string }>`
	position: relative;
	width: 33.3%;
	${(props) => props.theme.style.ratio()};
	${(props) => props.theme.layout.full_image(props.url)};
`;

const CloseBtn = styled.div`
	align-self: flex-start;
	cursor: pointer;
`;

const InputFile: React.FC<InputFileProps> = ({ label, onChange, bgColor, files, onThumbnailClick }) => {
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Col>
				{files &&
					files.map((el, index) => {
						return (
							<Thumbnail url={el.url} key={index}>
								<BoxInnerThumb>
									<CloseBtn onClick={() => onThumbnailClick(el)}>
										<Icon name="close" />
									</CloseBtn>
								</BoxInnerThumb>
							</Thumbnail>
						);
					})}

				<FileBtn bgColor={bgColor}>
					<BoxInnerBtn>
						<Input type={"file"} onChange={onChange} accept=".gif, .jpg, .png" />
						<Icon name="plus" />
					</BoxInnerBtn>
				</FileBtn>
			</Col>
		</Wrapper>
	);
};

export default InputFile;
