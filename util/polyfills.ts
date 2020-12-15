import dynamic from "next/dynamic";

// const scrollSnapPolyfill = dynamic(() => import('css-scroll-snap-polyfill'))
// const scrollSnapPolyfill = dynamic(() => import("css-scroll-snap-polyfill"), { ssr: false });
import scrollSnapPolyfill from "css-scroll-snap-polyfill";

export const polyfills = () => {
	// console.log(scrollSnapPolyfill);

	scrollSnapPolyfill();
};
