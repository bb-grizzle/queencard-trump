import { css } from "styled-components";
import media from "../media";

export const componentStyle = {
	input: {
		layout: css`
			width: 100%;
		`,
		label: css`
			padding-top: 8px;
		`,
		item: css`
			padding: 16px 0;

			@media ${media.tablet} {
			}
		`,
	},

	textarea: css`
		padding-top: 0;
		border-top: 0px;
		> textarea {
			color: ${(props) => props.theme.colorPalette.bw[500]};
			line-height: 1.6;
			height: calc(18px * 4 * 1.6);
			padding: 20px;
			border: 1px solid ${(props) => props.theme.colorPalette.bw[500]};
			font-size: 13px;
		}
	`,

	hover: {
		default: css`
			&:hover {
				opacity: 0.8;
				cursor: pointer;
			}
		`,
	},

	// user menu
	userMenu: css`
		min-width: 240px;
		color: ${(props) => props.theme.colorPalette.bw[700]};
		${(props) => props.theme.fontStyle.nav.default};
		border-radius: 4px;

		> a,
		> p {
			padding: 8px;
		}

		&:hover {
			background-color: ${(props) => props.theme.colorPalette.sub.hoverArea};
		}
	`,
};
