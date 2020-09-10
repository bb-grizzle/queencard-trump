import { useState } from "react";
import checkFile from "../util/filecheck";

const useInputManyFile = () => {
	const [files, setFiles] = useState<{ file: any; url: string }>();

	const onChange = (e: any) => {
		if (!checkFile(e.target)) return;

		if (e.target.files && e.target.files[0] !== undefined) {
			const url = URL.createObjectURL(e.target.files[0]);
			const file = e.target.files[0];

			setFiles({
				file,
				url
			});
		}
	};

	return { files, onChange, setFiles };
};

export default useInputManyFile;
