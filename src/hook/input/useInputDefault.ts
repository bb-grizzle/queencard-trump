import { ChangeEvent, HTMLAttributes, InputHTMLAttributes, useState } from "react";
import useInputLayout, { UseInputLayoutPropsType, UseInputLayoutResultType } from "./useInputLayout";
import { inputValidation, ValidationType } from "@/util/validation";
import { FormatType, inputFormating } from "@/util/formating";
import { DATA_ERROR } from "@/data/error";
import { ButtonProps } from "@/components/shared/Button";

type UseInputDefaultType = (props: UseInputDefaultPropsType) => UseInputDefaultResultType;

type UseInputDefaultPropsType = {
	layout: UseInputLayoutPropsType;
	option?: InputHTMLAttributes<HTMLInputElement>;
	init?: ValueType;
	validation?: ValidationType;
	formating?: FormatType;
	button?: ButtonProps;
};

export type UseInputDefaultResultType = UseInputDefaultPropsType & {
	layout: UseInputLayoutResultType;
	value: ValueType;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	clearValue: () => void;
	checkValidation: () => void;
};

type ValueType = string | number;

const useInputDefault: UseInputDefaultType = ({ layout, init, validation, formating, ...rest }) => {
	// FIELD
	const layoutHook = useInputLayout(layout);
	const [value, setValue] = useState<ValueType>(init ?? "");

	// STATE

	// METHOD
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (formating) {
			const prevValue = e.target.value;
			const currentValue = inputFormating[formating](prevValue);
			setValue(currentValue);
		} else {
			setValue(e.target.value);
		}
		rest.option?.onChange?.(e);
	};

	const clearValue = () => {
		setValue(init ?? "");
		layoutHook.changeErrorMessage(null);
	};

	const checkValidation = () => {
		if (!validation) return;
		if (!value || !(typeof value === "string")) return;

		// require validation
		if (rest.option?.required && !value) {
			layoutHook.changeErrorMessage(DATA_ERROR.validation.required);
			return;
		}

		// custom validation
		const validationObj = inputValidation[validation];
		const check = validationObj.reg.test(value);
		if (!check) {
			layoutHook.changeErrorMessage(validationObj.error);
		}
		return;
	};

	return { layout: layoutHook, value, onChange, clearValue, checkValidation, ...rest };
};

export default useInputDefault;
