import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const color = {
	black: "black",
	white: "white"
};

const theme = {
	color
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
