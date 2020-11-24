import styled, { css } from "styled-components";
import InputDefault from "./InputDefault";
import InputFile from "./inputFile";
import { useEffect } from "react";
import BtnText from "../Btn/BtnText";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
import useCol from "../../Hook/useCol";
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
`;
const BtnDelete = styled(BtnText)`
	position: absolute;
	right: 12px;
	top: 12px;
`;

const InputContents = ({ value, onAdd, onDelete, title, image }) => {
	const { col } = useCol({ pc: 4 });

	return (
		<Wrapper>
			<AddWrapper>
				<InputWrapper>
					<InputTitle {...title} placeholder={"제목"} />
					<InputImage {...image} />
				</InputWrapper>
				<BtnAdd text="추가" active={!!title.value && !!image.fileName} onClick={onAdd} />
			</AddWrapper>

			<ContentsWrapper>
				{value &&
					value.map((el, index) => {
						return (
							<ContentsList key={index} col={col} isLast={(index + 1) % col === 0}>
								<Paragraph bold={true} text={`${el.title} / `} />
								<Paragraph text={el.image.fileName ? el.image.fileName : el.image.name} />
								<BtnDelete text={"삭제"} onClick={() => onDelete(el, index)} />
							</ContentsList>
						);
					})}
			</ContentsWrapper>
		</Wrapper>
	);
};

export default InputContents;
