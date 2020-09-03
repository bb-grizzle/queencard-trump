import styled from "styled-components";

interface TitleLgProps {
	title: string;
	className?: string;
}

const Title = styled.h3`
	font-weight: 700;
	font-size: 20px;
	line-height: 1.5;
	text-transform: capitalize;
`;

const TitleLg: React.FC<TitleLgProps> = ({ title, className }) => <Title className={className}>{title}</Title>;

export default TitleLg;
