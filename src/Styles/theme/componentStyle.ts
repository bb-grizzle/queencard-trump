import { css } from "styled-components";
import media from "../media";
import { fontStyle } from "./fontStyle";

export const componentStyle = {
	input: {
		layout: css`
			width: 100%;

			@media ${media.tablet} {
				font-size: ${`${fontStyle.input.tablet}px`};
			}
		`,
		label: css`
			padding-top: 8px;
		`,
		item: css`
			font-size: ${`${fontStyle.input.pc}px`};
			padding: 16px 0;

			@media ${media.tablet} {
			}
		`,
	},

	textarea: css`
		padding-top: 0;
		border-top: 0px;
		> textarea {
			color: ${(props) => props.theme.color.gray[500]};
			line-height: 1.6;
			height: calc(18px * 4 * 1.6);
			padding: 20px;
			border: 1px solid ${(props) => props.theme.color.gray[500]};
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
};
