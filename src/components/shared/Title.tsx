import styled from "styled-components";
import Button, { ButtonProps } from "./Button";

export interface TitleProps {
	text: string;
	button?: ButtonProps;
	className?: string;
}

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 32px;
`;

const Text = styled.h1`
	font-size: 20px;
	font-weight: lighter;
	text-decoration: underline;
	margin-bottom: 16px;
`;

const Title: React.FC<TitleProps> = ({ text, className, button }) => {
	return (
		<Wrapper className={className}>
			<Text>{text}</Text>
			{button && <Button {...button} />}
		</Wrapper>
	);
};

export default Title;
