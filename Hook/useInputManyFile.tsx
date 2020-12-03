import { useState } from "react";
import checkFile from "../util/filecheck";

const useInputManyFile = () => {
	const [files, setFiles] = useState([]);
	const [deleteFiles, setDeleteFiles] = useState();

	const onChange = (e: any) => {
		if (!checkFile(e.target)) return;

		const url = URL.createObjectURL(e.target.files[0]);

		const file = e.target.files[0];

		setFiles((n) => [
			...n,
			{
				file,
				url,
				fileName: file.name
			}
		]);
	};
	const init = () => {
		setFiles([]);
	};

	return { files, onChange, setFiles, init, deleteFiles, setDeleteFiles };
};

export default useInputManyFile;
