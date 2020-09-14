import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const color = {
	black: "black",
	white: "white",
	gray: {
		default: "#686868",
		light: "#dddddd"
	},
	header: "#f5f5f4a3",
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
	default: `all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);`,
	hover: `all .5s cubic-bezier(0.32, 0, 0.64, 0.99)`
};

const animation = {
	default: `
		animation-duration: 1s;
		animation-timing-function: cubic-bezier(0.7, 0, 0.24, 0.99);
	`
};

const layout = {
	full_height: `calc(var(--vh, 1vh) * 100);`,
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
	`,
	input_default: `
		padding: 0px 12px;
		line-height: 1.5;
		font-size: 16px;
		position: relative;
	`
};

const style = {
	ratio: (ratio) => `&:after {
		content: "";
		padding-top: ${ratio ? ratio : 100}%;
		display: block;
	}`,
	border: `1px solid ${color.gray.light}`,
	event_disable: `user-select: none;
	pointer-events:none;`,
	event_able: `user-select: auto;
	pointer-events:auto;`,
	hover_effect: ``
};

const zIndex = {
	loading: 60,
	menu: 100,
	header: 80,
	adminForm: 50,
	insperationDetail: 90,
	supported_browsers: 120
};

const size = {
	height_input: "36px",
	height_input_mobile: "46px",
	header: {
		pc: "120px",
		mobile: "60px"
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
	animation,
	zIndex,
	size
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
