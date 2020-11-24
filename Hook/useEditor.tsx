import { useState, useEffect } from "react";

const useEditor = (initVal) => {
	const [value, setValue] = useState(initVal ? initVal : "");

	const onChange = (value: string) => {
		setValue(value);
	};

	const init = () => {
		setValue(initVal);
	};

	return { value, setValue, onChange, init };
};

export default useEditor;
