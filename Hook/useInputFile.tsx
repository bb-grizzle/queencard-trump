import { useState } from "react";
import checkFile from "../util/filecheck";

const useInputFile = () => {
	const [file, setFile] = useState<any>();
	const [url, setUrl] = useState("");

	const onChange = (e: any) => {
		if (!checkFile(e.target)) return;

		if (e.target.files && e.target.files[0] !== undefined) {
			const url = URL.createObjectURL(e.target.files[0]);
			const file = e.target.files[0];

			setFile(file);
			setUrl(url);
		}
	};

	return { file, url, onChange };
};

export default useInputFile;
