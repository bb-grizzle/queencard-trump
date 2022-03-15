import styled, { css } from "styled-components";
import LogoRect from "../../Asset/logo.svg";

interface LogoProps {
	color?: LogoColorType;
	size?: number;
	className?: string;
}

type LogoColorType = {
	bg: string;
	symbol: string;
};

const LogoWrapper = styled.div<{ logoColor?: LogoColorType; size: number }>`
	display: inline-block;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	${(props) =>
		props.logoColor &&
		css`
			.logo_svg__background {
				fill: ${props.logoColor.bg};
			}
			.logo_svg__symbol {
				fill: ${props.logoColor.symbol};
			}
		`};
`;

const LogoRectComp = styled(LogoRect)`
	/* color */
	width: 100%;
	height: 100%;
`;

const Logo: React.FC<LogoProps> = ({ color, size = 80, className }) => {
	return (
		<LogoWrapper className={className} logoColor={color} size={size}>
			<LogoRectComp viewBox="0 0 80 80" />
		</LogoWrapper>
	);
};

export default Logo;
