import styled, { StyledComponentProps } from "styled-components";
import {} from "styled-components/";

interface LogoProps {
	color?: string;
	size?: number;
	className?: string;
}

const Wrapper = styled.div``;

const Text = styled.p<{ color?: string; size?: number }>`
	font-weight: bold;

	color: ${(props) => props.color};
	font-size: ${(props) => `${props.size}px`};
`;
const Logo: React.FC<LogoProps> = ({ color = "black", size = 20, className }) => {
	return (
		<Wrapper className={className}>
			<Text color={color} size={size}>
				Seoohee An
			</Text>
		</Wrapper>
	);
};

export default Logo;
