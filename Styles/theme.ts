import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const color = {
	black: "black",
	white: "white",
	gray: {
		default: "#686868",
		light: "#dddddd"
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
			height: ${size ? `${size}px` : `2px`};
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
	default: `all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);`
};

const animation = {
	default: `
		animation-duration: 1s;
		animation-timing-function: cubic-bezier(0.7, 0, 0.24, 0.99);
	`
};

const layout = {
	full_height: `height: calc(var(--vh, 1vh) * 100);`,
	full_abs: ``,
	full_image: (url) => `
		background-image: url(${url});
		background-size: cover;
		background-position: center;`,
	center_flex: `
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	input_default: `
		padding: 8px 12px;
		font-size: 16px;
		position: relative;
	`
};

const zIndex = {
	loading: 50,
	menu: 100
};

const size = {
	height_input: "36px"
};

const theme = {
	color,
	div,
	transition,
	layout,
	animation,
	zIndex,
	size
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
