import styled from "styled-components";
import media from "../../Styles/media";

interface ParagraphProps {
	className?: string;
	text: string | string[];
	bold?: boolean;
	type?: ParagraphType;
	color?: string;
	size?: number;
}

export enum ParagraphType {
	LG = "lg",
	MD = "md",
	SM = "sm",
}

const Text = styled.p<{ bold: boolean; type: ParagraphType; color?: string; size: number }>`
	font-size: ${(props) => `${props.size ? props.size : props.theme.fontstyle.paragraph[props.type]}px`};
	font-weight: ${(props) => (props.bold ? 700 : 400)};
	line-height: 1.46;
	color: ${(props) => (props.color ? props.color : "inherit")};

	@media ${media.tablet} {
		font-size: ${(props) => `${props.size ? props.size : props.theme.fontstyle.paragraph[`${props.type}_tablet`]}px`};
	}

	> span {
		display: block;
		min-height: ${(props) => `${props.size ? props.size * 1.42 : props.theme.fontstyle.paragraph[props.type] * 1.42}px`};
	}
	a {
		color: ${(props) => props.theme.color.link};
	}
`;

const Paragraph: React.FC<ParagraphProps> = ({ text, className, bold = false, type = ParagraphType.MD, color, size }) => {
	return (
		<Text className={className} bold={bold} type={type} color={color} size={size}>
			{Array.isArray(text) ? text.map((t, index) => <span key={index} dangerouslySetInnerHTML={{ __html: t }} />) : text}
		</Text>
	);
};

export default Paragraph;
