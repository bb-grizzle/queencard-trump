import styled, { css } from "styled-components";
import { colorPalette } from "../../Styles/theme/colorPalette";

interface DivProps {
	className?: string;
	type?: DivType;
	color?: string;
	size?: number;
	weight?: string;
}

export enum DivType {
	VER,
	HOR,
}

const DivComp = styled.div<{ type: DivType; color: string; size: number; weight: string }>`
	background-color: ${(props) => props.theme.color.div};
	${(props) =>
		props.type === DivType.HOR
			? css`
					/* horizontal */
					width: ${props.weight};
					height: ${props.size}px;
			  `
			: css`
					/* vertical */
					width: ${props.size}px;
					height: ${props.weight};
			  `};
`;

const Div: React.FC<DivProps> = ({ type = DivType.HOR, className, color = colorPalette.bw[200], size = 1, weight = `auto` }) => {
	return <DivComp className={className} type={type} color={color} size={size} weight={weight} />;
};

export default Div;
