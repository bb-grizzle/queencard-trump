import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";
interface InputLayoutProps {
	label?: string;
	className?: string;
	initStyle?: boolean;
	caption?: string;
}
const Wrapper = styled.div<{ initStyle?: boolean }>`
	display: flex;
	flex-direction: column;
	${(props) => props.theme.style.input.layout(props.initStyle)};
`;

const LabelWrapper = styled.div`
	font-size: 18px;
	display: flex;
	align-items: flex-end;
`;

const LabelText = styled(Paragraph)`
	margin-right: 8px;

	span {
		display: inline;
		&:first-child {
			margin-right: 8px;
		}
	}
	.caption {
		font-size: 13px;
	}
`;

const InputLayout: React.FC<InputLayoutProps> = ({ children, label, className, initStyle, caption }) => {
	return (
		<Wrapper className={`${className} Inputlayout`} initStyle={initStyle}>
			{!!label && (
				<LabelWrapper className="inputlayout-label">
					<LabelText text={caption ? [label, `<span class="caption">${caption}</span>`] : label} type={ParagraphType.LG} />
				</LabelWrapper>
			)}
			{children}
		</Wrapper>
	);
};

export default InputLayout;
