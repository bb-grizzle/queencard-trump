import { useState, useEffect } from "react";

const useImageLoad = (initUrl) => {
	const [url, setUrl] = useState(initUrl);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		if (url) {
			const dom = document.createElement("img");
			dom.src = url;
			dom.addEventListener("load", () => {
				setLoad(true);
			});
			return setLoad(false);
		}
	}, [url]);

	return { load, setUrl };
};

export default useImageLoad;
