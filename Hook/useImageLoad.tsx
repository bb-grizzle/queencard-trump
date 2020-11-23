import { useState, useEffect } from "react";

const useImageLoad = (url) => {
	const [load, setLoad] = useState(false);

	useEffect(() => {
		const dom = document.createElement("img");
		dom.src = url;
		dom.addEventListener("load", () => {
			setLoad(true);
		});
		return setLoad(false);
	}, []);

	return { load };
};

export default useImageLoad;
