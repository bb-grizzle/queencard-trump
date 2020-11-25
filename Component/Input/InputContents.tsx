import styled, { css } from "styled-components";
import InputDefault from "./InputDefault";
import InputFile from "./InputFile";
import BtnText from "../Btn/BtnText";
import Paragraph from "../Text/Paragraph";
import useCol from "../../Hook/useCol";
import media from "../../Styles/media";
import TextArea from "./TextArea";
const Wrapper = styled.div``;

const AddWrapper = styled.div``;

const InputTitle = styled(InputDefault)`
	flex-grow: 1;
`;
const InputText = styled(TextArea)`
	${(props) => props.theme.style.input};
`;

const InputImage = styled(InputFile)`
	width: initial;
`;
const BtnAdd = styled(BtnText)`
	flex-grow: 0;
`;
const ContentsWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 32px;
`;
const ContentsList = styled.li<{ col: number; isLast: boolean }>`
	border: 1px solid ${(props) => props.theme.color.gray.default};
	border-radius: 8px;
	position: relative;

	width: ${(props) => `calc((100% - ${props.theme.size.gap.contents * (props.col - 1)}px) / ${props.col})`};
	margin-right: ${(props) =>
		props.isLast
			? 0
			: css`
					${(props) => `${props.theme.size.gap.contents}px`};
			  `};
	margin-bottom: ${(props) => `${props.theme.size.gap.contents}px`};
	display: flex;
	align-items: center;
	padding: 12px;
	cursor: pointer;
	@media ${media.hover} {
		&:hover {
			border-color: ${(props) => props.theme.color.black};
		}
	}
`;
const BtnDelete = styled(BtnText)``;

const Thumbnail = styled.div<{ image: string }>`
	${(props) => props.theme.layout.ratio(100)};
	width: 56px;
	margin-right: 8px;
	background-image: ${(props) => `url('${props.image}')`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	background-color: ${(props) => props.theme.color.gray.light};
	flex-shrink: 0;
`;

const AddBottomWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ListTextWrapper = styled.div`
	border: 1px solid red;
`;

const ListText = styled(Paragraph)`
	/* text-overflow: ellipsis; */
	/* white-space: nowrap; */
	/* overflow: hidden; */
`;

const ListContentsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-grow: 1;
`;

const InputContents = ({ value, onAdd, onDelete, title, text, image, isText, onListClick, nowContents, onEdit }) => {
	const { col } = useCol({ pc: 3, tablet: 2 });
	return (
		<Wrapper>
			<AddWrapper>
				<InputTitle {...title} placeholder={"제목"} />
				{isText && <InputText {...text} placeholder={"내용"} />}
				<AddBottomWrapper>
					<InputImage {...image} />
					<BtnAdd text={nowContents ? "수정" : "추가"} active={!!title.value && !!image.fileName} onClick={nowContents ? onEdit : onAdd} />
				</AddBottomWrapper>
			</AddWrapper>

			<ContentsWrapper>
				{value &&
					value.map((el, index) => {
						return (
							<ContentsList key={index} col={col} isLast={(index + 1) % col === 0} onClick={() => onListClick({ ...el, index })}>
								<Thumbnail image={el.image.url} />

								<ListContentsWrapper>
									<Paragraph bold={true} text={`${el.title}`} />

									<BtnDelete
										text={"삭제"}
										onClick={(e: any) => {
											e.preventDefault();
											e.stopPropagation();
											onDelete(el, index);
										}}
									/>
								</ListContentsWrapper>
							</ContentsList>
						);
					})}
			</ContentsWrapper>
		</Wrapper>
	);
};

export default InputContents;
