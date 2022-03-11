import { useState, Dispatch, SetStateAction } from "react";

interface UseEditorProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	onChange: (value: string) => void;
	init: () => void;
}

type UseEditorType = (initVal?: string) => UseEditorProps;

const useEditor: UseEditorType = (initVal = "") => {
	const [value, setValue] = useState(initVal);

	const onChange = (value: string) => {
		setValue(value);
	};

	const init = () => {
		setValue(initVal);
	};

	return { value, setValue, onChange, init };
};

export default useEditor;
