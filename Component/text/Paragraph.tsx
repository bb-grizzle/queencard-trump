import styled from "styled-components";
import { TextLang } from "../../interface/interface";
interface ParagraphProps {
	text: string;
	className?: string;
	lang?: TextLang;
	color?: string;
}

interface TextProps {
	size: number;
	lineHeight: number;
	color?: string;
}

const Text = styled.p<TextProps>`
	color: ${(props) => (props.color ? props.color : props.theme.color.gray.default)};
	font-weight: 400;

	font-size: ${(props) => `${props.size}px`};
	line-height: ${(props) => `${props.lineHeight}`};
	margin-bottom: 24px;
`;

const Paragraph: React.FC<ParagraphProps> = ({ text, className, lang = TextLang.EN, color }) => {
	return (
		<Text color={color} className={className} size={lang === TextLang.EN ? 14 : 13.5} lineHeight={lang === TextLang.EN ? 1.6 : 1.8}>
			{text}
		</Text>
	);
};

export default Paragraph;
