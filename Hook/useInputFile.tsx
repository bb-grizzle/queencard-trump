import { useState } from "react";
import checkFile from "../util/filecheck";

const useInputFile = () => {
	const [file, setFile] = useState<any>();
	const [fileName, setFileName] = useState();
	const [url, setUrl] = useState("");

	const onChange = (e: any) => {
		if (!checkFile(e.target)) return;

		if (e.target.files && e.target.files[0] !== undefined) {
			const url = URL.createObjectURL(e.target.files[0]);
			const file = e.target.files[0];
			setFile(file);
			setFileName(file.name);
			setUrl(url);
		}
	};
	const init = () => {
		setFile(null);
		setUrl(null);
		setFileName(null);
	};

	const setValue = (name) => {
		setFileName(name);
	};

	return { file, url, onChange, init, setValue, fileName };
};

export default useInputFile;
