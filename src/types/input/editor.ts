import Editor, { API, EditorConfig, OutputData } from "@editorjs/editorjs";
import { UseInputLayoutPropsType, UseInputLayoutResultType } from "@/hook/input/useInputLayout";
import { UseInputSharedResultType } from "./shared";
import { MutableRefObject } from "react";

export type UseInputEditorType = (props: UseInputEditorPropsType) => UseInputEditorResultType;

type UseInputEditorPropsType = {
	layout: UseInputLayoutPropsType;
	option?: EditorConfig & { name?: string; required?: boolean };
};

export type UseInputEditorResultType = UseInputEditorPropsType &
	UseInputSharedResultType & {
		value: OutputData | null;
		onChange: (api: API, event: CustomEvent<any>) => void;
		clearValue: () => void;
		editorRef: MutableRefObject<Editor | undefined>;
	};
