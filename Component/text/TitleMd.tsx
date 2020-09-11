import styled from "styled-components";

interface TitleMdProps {
	title: string;
	className?: string;
	color?: string;
}

const Title = styled.h3<{ color?: string }>`
	text-transform: capitalize;
	font-weight: 700;
	font-size: 18px;
	line-height: 29px;
	color: ${(props) => (props.color ? props.color : props.theme.color.black)};
`;

const TitleMd: React.FC<TitleMdProps> = ({ title, className, color }) => (
	<Title color={color} className={className}>
		{title}
	</Title>
);

export default TitleMd;
