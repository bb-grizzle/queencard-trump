import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const color = {
	black: "black",
	white: "white",
	bg: "#F5F5F4"
};

const theme = {
	color
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
