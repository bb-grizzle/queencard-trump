import useInputLayout from "./useInputLayout";
import { useRef, useState } from "react";
import { UseInputEditorType } from "@/types/input/editor";
import { DATA_ERROR } from "@/data/error";
import Editor, { API, OutputData } from '@editorjs/editorjs';

const useInputEditor: UseInputEditorType = ({ layout, ...rest }) => {
	const editorRef = useRef<Editor>()
	const layoutHook = useInputLayout(layout);
	const [value, setValue] = useState<OutputData | null>(null);
	const [isError, setIsError] = useState(false);

	// STATE
	const onChange = async (api: API, event: CustomEvent<any>) => {
		const value = await api.saver.save()
		setValue(value);
	};

	const clearValue = () => {
		setValue(null);
		setIsError(false);
		layoutHook.changeErrorMessage(null);
	};

	const checkValidation = () => {
		// required
		if (rest.option?.required && !value) {
			setIsError(true);
			layoutHook.changeErrorMessage(DATA_ERROR.validation.required);
			return;
		}

		// true
		layoutHook.changeErrorMessage(null);
		setIsError(false);
	};

	const changeValue = (value: string) => {
		if (editorRef.current) {
			editorRef.current?.render(JSON.parse(value))
		}
	};

	return { layout: layoutHook, value, onChange, clearValue, checkValidation, isError, changeValue, editorRef, ...rest };
};

export default useInputEditor;
