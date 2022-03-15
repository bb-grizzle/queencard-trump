import { css } from "styled-components";
import theme from ".";

export const div = {
	top: (color?: string, size?: number) => css`
		&:after {
			content: "";
			position: absolute;
			width: 100%;
			height: ${size ? `${size}px` : `2px`};
			top: 0;
			left: 0;
			background-color: ${color ? color : theme.color.div};
		}
	`,
	bottom: (color?: string, size?: number, width?: string) => css`
		&:after {
			content: "";
			position: absolute;
			width: ${width ? width : "100%"};
			height: ${size ? `${size}px` : `2px`};
			bottom: 0;
			left: 0;
			background-color: ${color ? color : theme.color.div};
		}
	`,
	left: (color?: string, size?: number) => css`
		&:after {
			content: "";
			position: absolute;
			width: ${size ? `${size}px` : `2px`};
			height: 100%;
			top: 0;
			left: 0;
			background-color: ${color ? color : theme.color.div};
		}
	`,
	right: (color?: string, size?: number) => css`
		&:after {
			content: "";
			position: absolute;
			width: ${size ? `${size}px` : `2px`};
			height: 100%;
			top: 0;
			right: 0;
			background-color: ${color ? color : theme.color.div};
		}
	`,
};
