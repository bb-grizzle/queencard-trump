import { ReactQuillProps } from "react-quill";
import useInputLayout, { UseInputLayoutPropsType, UseInputLayoutResultType } from "./useInputLayout";
import { useState } from "react";

type UseInputEditorType = (props: UseInputEditorPropsType) => UseInputEditorResultType;

type UseInputEditorPropsType = {
	layout: UseInputLayoutPropsType;
	option?: ReactQuillProps;
};

export type UseInputEditorResultType = UseInputEditorPropsType & {
	layout: UseInputLayoutResultType;
	value: string;
	onChange: (value: string) => void;
	clearValue: () => void;
};

const useInputEditor: UseInputEditorType = ({ layout, ...rest }) => {
	const layoutHook = useInputLayout(layout);
	const [value, setValue] = useState("");

	const onChange = (value: string) => {
		setValue(value);
	};

	const clearValue = () => {};

	return { layout: layoutHook, value, onChange, clearValue, ...rest };
};

export default useInputEditor;
