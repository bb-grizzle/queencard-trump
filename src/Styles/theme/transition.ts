import { css } from "styled-components";

export const transition = {
	default: `all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);`,
	load: (load, opacity = 1) => css`
		transition: all 0.5s cubic-bezier(0.7, 0, 0.24, 0.99);
		transition-property: opacity;
		opacity: ${() => (load ? opacity : 0)};
		transition-delay: 0.5s;
	`,
};
