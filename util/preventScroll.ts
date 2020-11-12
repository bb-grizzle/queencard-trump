import theme from "../Styles/theme";

export const preventScroll = () => {
	document.body.style.height = theme.size.full_height;
	document.body.style.overflow = "hidden";
};

export const activeScroll = () => {
	document.body.style.height = "initial";
	document.body.style.overflow = "auto";
};
