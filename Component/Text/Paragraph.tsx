import styled from "styled-components";

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
	SM = "sm"
}

const Text = styled.p<{ bold: boolean; type: ParagraphType; color: string; size: number }>`
	font-size: ${(props) => `${props.size ? props.size : props.theme.text.paragraph[props.type]}px`};
	font-weight: ${(props) => (props.bold ? 700 : 400)};
	line-height: 1.42;
	color: ${(props) => props.color};

	> span {
		display: block;
		min-height: ${(props) => `${props.theme.text.paragraph[props.type] * 1.42}px`};
	}
`;

const Paragraph: React.FC<ParagraphProps> = ({ text, className, bold = false, type = ParagraphType.MD, color = "black", size }) => {
	return (
		<Text className={className} bold={bold} type={type} color={color} size={size}>
			{Array.isArray(text) ? text.map((t, index) => <span key={index}>{t}</span>) : text}
		</Text>
	);
};

export default Paragraph;
