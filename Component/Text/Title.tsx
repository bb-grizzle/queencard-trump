import styled from "styled-components";

interface TitleProps {
	title: string;
	type?: TitleType;
	className?: string;
	isRegular?: boolean;
	color?: string;
}
export enum TitleType {
	LG = "lg",
	MD = "md",
	SM = "sm"
}

const Text = styled.h3<{ type: TitleType; isRegular: boolean; color?: string }>`
	font-size: ${(props) => `${props.theme.text.title[props.type]}px`};
	font-weight: ${(props) => (props.isRegular ? 400 : 700)};
	line-height: 1.42;

	color: ${(props) => (props.color ? props.color : "inherit")};
`;

const Title: React.FC<TitleProps> = ({ title, type = TitleType.LG, className, isRegular = false, color }) => {
	return (
		<Text className={className} type={type} isRegular={isRegular} color={color}>
			{title}
		</Text>
	);
};

export default Title;
