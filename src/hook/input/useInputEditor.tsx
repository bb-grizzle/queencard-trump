import useInputLayout from "./useInputLayout";
import { useState } from "react";
import { UseInputEditorType } from "@/types/input/editor";
import { DATA_ERROR } from "@/data/error";

const useInputEditor: UseInputEditorType = ({ layout, ...rest }) => {
	const layoutHook = useInputLayout(layout);
	const [value, setValue] = useState("");
	const [isError, setIsError] = useState(false);

	const onChange = (value: string) => {
		setValue(value);
	};

	const clearValue = () => {
		setValue("");
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
		setValue(value);
	};

	return { layout: layoutHook, value, onChange, clearValue, checkValidation, isError, changeValue, ...rest };
};

export default useInputEditor;
