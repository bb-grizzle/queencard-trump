import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import useInputLayout, { UseInputLayoutPropsType, UseInputLayoutResultType } from "./useInputLayout";
import { inputValidation, ValidationType } from "@/util/validation";
import { FormatType, inputFormating } from "@/util/formating";
import { DATA_ERROR } from "@/data/error";
import { ButtonProps } from "@/components/shared/Button";

type UseInputDefaultType = (props: UseInputDefaultPropsType) => UseInputDefaultResultType;

type UseInputDefaultPropsType = {
	layout: UseInputLayoutPropsType;
	option?: InputHTMLAttributes<HTMLInputElement>;
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

type ValueType = string | number | readonly string[];

const useInputDefault: UseInputDefaultType = ({ layout, validation, formating, ...rest }) => {
	// FIELD
	const layoutHook = useInputLayout(layout);
	const [value, setValue] = useState(rest.option?.value ?? "");

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
		setValue(rest.option?.value ?? "");
		layoutHook.changeErrorMessage(null);
	};

	const checkValidation = () => {
		// require validation
		if (!!value && rest.option?.required) {
			if (!value) {
				layoutHook.changeErrorMessage(DATA_ERROR.validation.required);
				return;
			}
		}

		if (validation && !!value && typeof value === "string") {
			// custom validation
			const validationObj = inputValidation[validation];
			const check = validationObj.reg.test(value);
			if (!check) {
				layoutHook.changeErrorMessage(validationObj.error);
			}
			return;
		}
	};

	return { layout: layoutHook, value, onChange, clearValue, checkValidation, ...rest };
};

export default useInputDefault;
