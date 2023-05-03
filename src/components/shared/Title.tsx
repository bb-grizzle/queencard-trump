import styled from "styled-components";

interface TitleProps {
	text: string;
	className?: string;
}

const Text = styled.h1`
	font-size: 20px;
	font-weight: lighter;
	text-decoration: underline;
	margin-bottom: 16px;
`;

const Title: React.FC<TitleProps> = ({ text, className }) => {
	return <Text className={className}>{text}</Text>;
};

export default Title;
