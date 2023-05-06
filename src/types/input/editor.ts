import { UseInputLayoutPropsType, UseInputLayoutResultType } from "@/hook/input/useInputLayout";
import { ReactQuillProps } from "react-quill";
import { UseInputSharedResultType } from "./shared";

export type UseInputEditorType = (props: UseInputEditorPropsType) => UseInputEditorResultType;

type UseInputEditorPropsType = {
	layout: UseInputLayoutPropsType;
	option?: ReactQuillProps & { name?: string; required?: boolean };
};

export type UseInputEditorResultType = UseInputEditorPropsType &
	UseInputSharedResultType & {
		value: string;
		onChange: (value: string) => void;
		clearValue: () => void;
	};
