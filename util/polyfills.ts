import dynamic from "next/dynamic";

// const scrollSnapPolyfill = dynamic(() => import('css-scroll-snap-polyfill'))
import scrollSnapPolyfill from "css-scroll-snap-polyfill";
// const scrollSnapPolyfill = dynamic(() => import("css-scroll-snap-polyfill"), { ssr: false });

export const polyfills = () => {
	// console.log(scrollSnapPolyfill);

	if (typeof window !== "undefined") {
		scrollSnapPolyfill();
	}
};
