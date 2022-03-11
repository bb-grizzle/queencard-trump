import { useState, useEffect } from "react";
import { BREAKPOINT_TABLET } from "../Styles/media";

const useSize = () => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
		isTablet: false
	});

	useEffect(() => {
		const changeMediaState = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
				isTablet: window.innerWidth <= BREAKPOINT_TABLET
			});
		};
		changeMediaState();
		window.addEventListener("resize", changeMediaState);
		return () => window.removeEventListener("resize", changeMediaState);
	}, []);

	return size;
};

export default useSize;
