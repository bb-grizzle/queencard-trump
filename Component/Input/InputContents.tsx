import styled, { css } from "styled-components";
import InputDefault from "./InputDefault";
import InputFile from "./inputFile";
import { useEffect } from "react";
import BtnText from "../Btn/BtnText";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import useCol from "../../Hook/useCol";
import media from "../../Styles/media";
const Wrapper = styled.div``;

const AddWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
`;
const InputTitle = styled(InputDefault)`
	flex-grow: 1;
`;
const InputImage = styled(InputFile)`
	width: initial;
	padding: 0 32px;
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
const BtnDelete = styled(BtnText)`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
`;

const Thumbnail = styled.div<{ image: string }>`
	${(props) => props.theme.layout.ratio(100)};
	width: 56px;
	margin-right: 8px;
	background-image: ${(props) => `url('${props.image}')`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	background-color: ${(props) => props.theme.color.gray.light};
`;

const TextWrapper = styled.div`
	/* border: 1px solid red; */
	flex-grow: 1;
`;

const InputContents = ({ value, onAdd, onDelete, title, text, image, isText, onListClick, nowContents, onEdit }) => {
	const { col } = useCol({ pc: 4 });
	return (
		<Wrapper>
			<AddWrapper>
				<InputWrapper>
					<TextWrapper>
						<InputTitle {...title} placeholder={"제목"} />
						{isText && <InputDefault {...text} placeholder={"내용"} />}
					</TextWrapper>
					<InputImage {...image} />
				</InputWrapper>
				<BtnAdd text={nowContents ? "수정" : "추가"} active={!!title.value && !!image.fileName} onClick={nowContents ? onEdit : onAdd} />
			</AddWrapper>

			<ContentsWrapper>
				{value &&
					value.map((el, index) => {
						return (
							<ContentsList key={index} col={col} isLast={(index + 1) % col === 0} onClick={() => onListClick({ ...el, index })}>
								<Thumbnail image={el.image.url} />
								<Paragraph bold={true} text={`${el.title}`} />

								<BtnDelete text={"삭제"} onClick={() => onDelete(el, index)} />
							</ContentsList>
						);
					})}
			</ContentsWrapper>
		</Wrapper>
	);
};

export default InputContents;
