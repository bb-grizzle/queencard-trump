export const preventScroll = () => {
	document.body.style.height = "100vh";
	document.body.style.overflow = "hidden";
};

export const activeScroll = () => {
	document.body.style.height = "auto";
	document.body.style.overflow = "auto";
};

export const scrollToTarget = (dom: HTMLDivElement | HTMLUListElement, value: number) => {
	dom.scrollTo({
		left: value,
		behavior: "smooth"
	});
};

export const scrollToTop = () => {
	window.scrollTo(0, 0);
};
