import { useState, useEffect } from "react";
import useInput from "./useInput";
import { getYoutubeId, getYoutubeSize } from "../util/getYoutubeId";

const useVideoInput = () => {
	const [value, setValue] = useState();
	const urlInput = useInput("");
	const [size, setSize] = useState();

	useEffect(() => {
		const youtubeId = getYoutubeId(urlInput.value);
		setValue(youtubeId);
	}, [urlInput.value]);

	useEffect(() => {
		const getSize = async () => {
			const size = await getYoutubeSize(value);
			setSize(size);
		};
		getSize();
	}, [value]);

	const setInit = (url) => {
		urlInput.setValue(url);
	};

	return { value, url: urlInput, size, setInit };
};

export default useVideoInput;
