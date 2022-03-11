import styled from "styled-components";
import Link from "next/link";
import media from "../../Styles/media";
import LogoRect from "../../Asset/logo.svg";

interface LogoProps {
	color?: string;
	size?: number;
	className?: string;
}

const Wrapper = styled.div``;

const LogoImage = styled.img`
	width: 160px;
	@media ${media.tablet} {
		width: 100px;
	}
`;

const Logo: React.FC<LogoProps> = ({ color = "black", size = 20, className }) => {
	return (
		<Wrapper className={className}>
			<Link href="/">
				<LogoRect />
			</Link>
		</Wrapper>
	);
};

export default Logo;
