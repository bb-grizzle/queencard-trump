import { css } from "styled-components";
import { size } from "./size";

export const layout = {
	full_abs: css`
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	`,
	full_height: css`
		height: 100vh;
		${size.full_height}
	`,
	full_image: (url: string) => css`
		background-image: url("${url}");
		background-size: cover;
		background-position: center;
	`,
	center_flex: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	ratio: (ratio: number) => css`
		&:after {
			content: "";
			padding-top: ${ratio ? ratio : 100}%;
			display: block;
		}
	`,
	hideScroll: css`
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		/* Hide scrollbar for Chrome, Safari and Opera */
		&::-webkit-scrollbar {
			display: none;
		}
	`,
};
