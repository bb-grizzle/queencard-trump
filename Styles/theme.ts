import baseStyled, { ThemedStyledInterface, css } from "styled-components";
import media from "./media";

const color = {
	black: "black",
	white: "white",
	gray: {
		dark: "#2E233E",
		default: "#878787",
		light: "rgba(0,0,0,0.05)"
	},
	div: "rgba(0,0,0,0.2)",
	main: "#45FF7D",
	placeholder: "#C4C4C4",
	dim: "white",
	disable: "#DBDBDB",
	link: "#3CADFF"
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
	default: `all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);`,
	load: (load, opacity = 1) => css`
		transition: all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);
		transition-property: opacity;
		opacity: ${() => (load ? opacity : 0)};
		transition-delay: 0.5s;
	`
};

const layout = {
	full_abs: `
	position: absolute;
		left:0;
		top: 0;
		right: 0;
		bottom: 0;
	`,
	full_image: (url) => css`
		background-image: url("${url}");
		background-size: cover;
		background-position: center;`,
	center_flex: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	ratio: (ratio) => css`
		&:after {
			content: "";
			padding-top: ${ratio ? ratio : 100}%;
			display: block;
		}
	`
};

const text = {
	title: {
		lg: 21,
		md: 18,
		sm: 18,

		lg_tablet: 18,
		md_tablet: 16,
		sm_tablet: 16
	},
	paragraph: {
		lg: 18,
		md: 14,
		sm: 12,

		lg_mobile: 18,
		md_mobile: 16,
		sm_mobile: 12
	},
	input: {
		pc: 18,
		tablet: 16
	}
};

const style = {
	input: {
		layout: (initStyle) => css`
			width: 100%;
			padding: ${initStyle ? 0 : "18px"} 0;
			font-size: ${`${text.input.pc}px`};
			line-height: 1.44;

			> .inputlayout-label {
				padding-bottom: 19px;
			}

			@media ${media.tablet} {
				margin-top: 16px;
				font-size: ${`${text.input.tablet}px`};
				padding: ${initStyle ? 0 : "12px 0px"};

				.inputlayout-label {
					padding-bottom: 8px;
				}
			}
		`,
		item: (initStyle) => css`
			padding-top: ${initStyle ? 0 : "23px"};
			color: ${color.main};

			border-top: ${initStyle ? "0" : "1px"} solid ${(props) => props.theme.color.black};

			@media ${media.tablet} {
				padding-top: ${initStyle ? 0 : "8px"};
			}
		`
	},

	textarea: css`
		padding-top: 0;
		border-top: 0px;
		> textarea {
			color: ${(props) => props.theme.color.gray.dark};
			line-height: 1.6;
			height: calc(18px * 4 * 1.6);
			padding: 20px;
			border: 1px solid ${(props) => props.theme.color.gray.dark};
			font-size: 13px;
		}
	`,

	hoverDefault: css`
		/* @media ${media.hover} { */
			&:hover {
				opacity: 0.5;
				cursor: pointer;
			}
		/* } */
	`,
	hideScroll: css`
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		/* Hide scrollbar for Chrome, Safari and Opera */
		&::-webkit-scrollbar {
			display: none;
		}
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

const zIndex = {
	adminForm: {
		pc: 50,
		tablet: 100
	},
	dim: {
		min: 50,
		max: 200
	},
	menu: 80,
	header: 90,
	floating: 120,
	loading: 150,
	popup: 200
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
	padding_top_contents: {
		pc: "64px",
		tablet: "16px"
	},
	padding_bottom_admin: {
		pc: "100px",
		mobile: "60px"
	},
	gap: {
		list: 30,
		section: 32,
		contents: 16
	},

	margin: {
		submit_top: 56
	}
};

const theme = {
	color,
	div,
	transition,
	layout,
	zIndex,
	size,
	event,
	text,
	style
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
