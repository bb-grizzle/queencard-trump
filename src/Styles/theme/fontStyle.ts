import { css } from "styled-components";

export const fontStyle = {
	title: {
		h1: css`
			font-weight: 700;
			font-size: 48px;
			line-height: 70px;
		`,
		h2: css`
			font-weight: 400;
			font-size: 24px;
			line-height: 35px;
		`,
		h3: css`
			font-weight: 400;
			font-size: 20px;
			line-height: 29px;
		`,
	},

	logo: css`
		font-weight: 350;
		font-size: 20px;
		line-height: 29px;
	`,

	// nav
	nav: {
		light: css`
			font-weight: 300;
			font-size: 16px;
			line-height: 23px;
		`,
		default: css`
			font-weight: 400;
			font-size: 16px;
			line-height: 23px;
		`,
		medium: css`
			font-weight: 500;
			font-size: 16px;
			line-height: 23px;
		`,
	},

	// input
	input: {
		default: css`
			font-weight: 400;
			font-size: 16px;
			line-height: 23px;
		`,
	},

	// btn
	btn: {
		default: css`
			/* 🖥 pc/btn/default */
			font-weight: 400;
			font-size: 16px;
			line-height: 23px;
		`,
		small: css`
			/* 🖥 pc/btn/small */
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
		`,
	},

	// /* paragraph */
	paragraph: {
		default: css`
			font-weight: 400;
			font-size: 16px;
			line-height: 23px;
		`,

		bold: css`
			font-weight: 700;
			font-size: 16px;
			line-height: 23px;
		`,
	},

	caption: css`
		font-weight: 400;
		font-size: 12px;
		line-height: 17px;
	`,

	label: css`
		font-weight: 400;
		font-size: 13px;
		line-height: 19px;
	`,
};
