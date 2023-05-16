import { css } from "styled-components";

export const style = {
	hoverStyle: css`
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	`,
	editor: css`
		h2.ce-header {
			${(props) => props.theme.fontStyle.headline.large};
		}
		h3.ce-header {
			${(props) => props.theme.fontStyle.headline.medium};
		}
		h4.ce-header {
			${(props) => props.theme.fontStyle.headline.small};
		}
	`,
};
