import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const color = {
	black: "black",
	white: "white",
	gray: {
		default: "#686868"
	},
	bg: "#F5F5F4",
	load: "#327CB2",
	hover: "rgba(0,0,0,0.2)"
};

const div = {
	default: (color?: string, size?: number) => `
		
		&:after {
			content: "";
			position: absolute;
			width: 100%;
			height: ${size ? `${size}px` : `2px`}
			top: 0;
			left: 0;
			background-color: ${color ? color : theme.color.black};
		}
	`,
	left: (color?: string, size?: number) => `
		
		&:after {
			content: "";
			position: absolute;
			width: ${size ? `${size}px` : `2px`};
			height: 100%;
			top: 0;
			left: 0;
			background-color: ${color ? color : theme.color.black};
		}
	`
};

const transition = {
	default: `all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);;`
};

const layout = {
	full_image: (url) => `
	background-image: url(${url});
	background-size: cover;
	background-position: center;`,
	center_flex: `
	display: flex;
	align-items: center;
	justify-content: center;
	`
};

const theme = {
	color,
	div,
	transition,
	layout
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
