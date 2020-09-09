import { useState } from "react";

const useInputFile = () => {
	const [files, setFiles] = useState([]);

	const onChange = (e: any) => {
		const url = URL.createObjectURL(e.target.files[0]);
		const file = e.target.files[0];
		setFiles((n) => [
			...n,
			{
				file,
				url
			}
		]);
	};

	return { files, onChange, setFiles };
};

export default useInputFile;
