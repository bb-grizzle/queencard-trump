import styled from "styled-components";

interface TitleMdProps {
	title: string;
	className?: string;
}

const Title = styled.h3`
	font-weight: 700;
	font-size: 18px;
	line-height: 29px;
`;

const TitleMd: React.FC<TitleMdProps> = ({ title, className }) => <Title className={className}>{title}</Title>;

export default TitleMd;
