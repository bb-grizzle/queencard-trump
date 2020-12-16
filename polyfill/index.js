import "./intersectionObserver";
import smoothscroll from "smoothscroll-polyfill";

const polyfill = async () => {
	console.log("polyfill ");
	window.__forceSmoothScrollPolyfill__ = true;

	smoothscroll.polyfill();
};

export default polyfill;
