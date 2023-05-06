import { UseInputLayoutResultType } from "@/hook/input/useInputLayout";

export type UseInputSharedResultType = {
	layout: UseInputLayoutResultType;
	value: any;
	clearValue: () => void;
	checkValidation: () => void;
	isError: boolean;
};
