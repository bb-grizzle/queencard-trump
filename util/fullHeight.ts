// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
export const makeFullHeight = () => {
	const fullHeight = () => {
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	window.addEventListener("resize", fullHeight);
	fullHeight();
};
