import { ChangeEvent, useState } from "react";
import useInputLayout from "./useInputLayout";
import { inputValidation } from "@/util/validation";
import { inputFormating } from "@/util/formating";
import { DATA_ERROR } from "@/data/error";
import { UseInputDefaultType } from "@/types/input/default";

const useInputDefault: UseInputDefaultType = ({ layout, validation, formating, ...rest }) => {
	// FIELD
	const layoutHook = useInputLayout(layout);
	const [isError, setIsError] = useState(false);
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
		if (!value && rest.option?.required) {
			layoutHook.changeErrorMessage(DATA_ERROR.validation.required);
			setIsError(true);
			return;
		}

		if (validation && !!value && typeof value === "string") {
			// custom validation
			const validationObj = inputValidation[validation];
			const check = validationObj.reg.test(value);
			if (!check) {
				layoutHook.changeErrorMessage(validationObj.error);
				setIsError(true);
			}
			return;
		}

		setIsError(false);
		layoutHook.changeErrorMessage(null);
	};

	return { layout: layoutHook, value, onChange, clearValue, checkValidation, isError, ...rest };
};

export default useInputDefault;
