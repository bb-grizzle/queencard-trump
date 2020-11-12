import baseStyled, { ThemedStyledInterface, css } from "styled-components";

const color = {
	black: "black",
	white: "white",
	gray: {
		dark: "#2E233E"
	},
	main: "#45FF7D",
	placeholder: "#C4C4C4",
	dim: "white"
};

const div = {
	top: (color?: string, size?: number) => `
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
	bottom: (color?: string, size?: number, width?: string) => `
		&:after {
			content: "";
			position: absolute;
			width: ${width ? width : "100%"};
			height: ${size ? `${size}px` : `2px`};
			bottom: 0;
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
	`,
	right: (color?: string, size?: number) => `
		
	&:after {
		content: "";
		position: absolute;
		width: ${size ? `${size}px` : `2px`};
		height: 100%;
		top: 0;
		right: 0;
		background-color: ${color ? color : theme.color.black};
	}
`
};

const transition = {
	default: `all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);`
};

const layout = {
	full_abs: `
	position: absolute;
		left:0;
		top: 0;
		right: 0;
		bottom: 0;
	`,
	full_image: (url) => `
		background-image: url("${url}");
		background-size: cover;
		background-position: center;`,
	center_flex: `
		display: flex;
		align-items: center;
		justify-content: center;
	`
};

const event = {
	disable: css`
		user-select: none;
		pointer-events: none;
	`,
	active: css`
		user-select: auto;
		pointer-events: auto;
	`
};

const style = {
	ratio: (ratio) => `&:after {
		content: "";
		padding-top: ${ratio ? ratio : 100}%;
		display: block;
	}`,
	border: `1px solid ${color.black}`
};

const zIndex = {
	adminForm: 50,
	loading: 60,
	menu: 80,
	header: 100,
	floating: 120
};

const size = {
	height_input: "36px",
	full_height: `calc(var(--vh, 1vh) * 100);`,

	header: {
		pc: "140px",
		mobile: "64px"
	},
	offset: {
		tablet: 16
	},
	padding_top_admin: {
		pc: "200px",
		mobile: "80px"
	},
	padding_bottom_admin: {
		pc: "100px",
		mobile: "60px"
	}
};

const theme = {
	color,
	div,
	transition,
	layout,
	style,
	zIndex,
	size,
	event
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
