import styled from "styled-components";
import Paragraph, { ParagraphType } from "../Text/Paragraph";

interface InputLayoutProps {
	label?: string;
	className?: string;
	initStyle?: boolean;
	caption?: string;
}
const Wrapper = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-direction: column;
	${(props) => props.theme.style.input.layout};
`;

const LabelWrapper = styled.div`
	font-size: 18px;
	display: flex;
	align-items: flex-end;

	${(props) => props.theme.style.input.label}
`;

const LabelText = styled(Paragraph)`
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
		<Wrapper className={`${className} `}>
			{!!label && (
				<LabelWrapper>
					<LabelText text={caption ? [label, `<span class="caption">${caption}</span>`] : label} type={ParagraphType.LG} size={14} />
				</LabelWrapper>
			)}
			{children}
		</Wrapper>
	);
};

export default InputLayout;
