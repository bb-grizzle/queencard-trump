import styled from "styled-components";

interface ParagraphProps {
	className?: string;
	text: string | string[];
	bold?: boolean;
	type?: ParagraphType;
	color?: string;
}

export enum ParagraphType {
	LG = "lg",
	MD = "md",
	SM = "sm"
}

const Text = styled.p<{ bold: boolean; type: ParagraphType; color: string }>`
	font-size: ${(props) => `${props.theme.text.paragraph[props.type]}px`};
	font-weight: ${(props) => (props.bold ? 700 : 400)};
	line-height: 1.42;
	color: ${(props) => props.color};
`;

const Paragraph: React.FC<ParagraphProps> = ({ text, className, bold = false, type = ParagraphType.MD, color = "black" }) => {
	return (
		<Text className={className} bold={bold} type={type} color={color}>
			{Array.isArray(text) ? text.map((t) => <span>{t}</span>) : text}
		</Text>
	);
};

export default Paragraph;
