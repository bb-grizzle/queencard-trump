import styled from "styled-components";
import media from "../../Styles/media";

interface TitleProps {
	title: string | string[];
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
	line-height: 1.44;

	color: ${(props) => (props.color ? props.color : "inherit")};
	span {
		display: block;
	}
	@media ${media.tablet} {
		font-size: ${(props) => `${props.theme.text.title[`${props.type}_tablet`]}px`};
	}
`;

const Title: React.FC<TitleProps> = ({ title, type = TitleType.LG, className, isRegular = false, color }) => {
	return (
		<Text className={className} type={type} isRegular={isRegular} color={color}>
			{Array.isArray(title) ? title.map((el, index) => <span key={index}>{el}</span>) : title}
		</Text>
	);
};

export default Title;
