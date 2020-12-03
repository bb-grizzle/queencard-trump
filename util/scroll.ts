export const preventScroll = () => {
	document.body.style.height = "100vh";
	document.body.style.overflow = "hidden";
};

export const activeScroll = () => {
	document.body.style.height = "auto";
	document.body.style.overflow = "initial";
};

export const scrollToTarget = (dom: HTMLDivElement | HTMLUListElement, value: number) => {
	dom.scrollLeft = value;
};
