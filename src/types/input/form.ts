import { UseInputDefaultResultType } from "./default";
import { UseInputDurationResultType } from "./duration";
import { UseInputEditorResultType } from "./editor";
import { UseInputImageResultType } from "./image";

export type UseFormType = (props: UseFormPropsType) => UseFormResultType;

type UseFormPropsType = {
	hooks: (UseInputDefaultResultType | UseInputImageResultType | UseInputDurationResultType | UseInputEditorResultType)[];
};

type UseFormResultType = {
	form: { [name: string]: [value: any] };
	validation: boolean;
	checkForm: () => void;
	getForm: () => void;
};
