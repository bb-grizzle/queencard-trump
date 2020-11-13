import { useState } from "react";

const useEditor = (init) => {
	const [value, setValue] = useState(init ? init : "내용을 작성하세요! 😆");

	const onChange = (value: string) => {
		setValue(value);
	};

	return { value, setValue, onChange };
};

export default useEditor;
