import { ChangeEvent, useEffect, useState } from "react";
import useInputLayout from "./useInputLayout";
import { DurationValueType, UseInputDurationType } from "@/types/input/duration";
import { DATA_ERROR } from "@/data/error";

const useInputDuration: UseInputDurationType = ({ layout, ...rest }) => {
	const layoutHook = useInputLayout(layout);
	const [startValue, setStartValue] = useState<string>("");
	const [endValue, setEndValue] = useState<string>("");
	const [value, setValue] = useState<DurationValueType>(null);
	const [isError, setIsError] = useState(false);

	// STATE
	// : init start
	useEffect(() => {
		if (rest.startOption?.value) {
			setStartValue(rest.startOption?.value.toString());
		}
	}, []);

	// init end
	useEffect(() => {
		if (rest.endOption?.value) {
			setEndValue(rest.endOption?.value.toString());
		}
	}, []);

	useEffect(() => {
		setValue({
			start: startValue,
			end: endValue,
		});
	}, [startValue, endValue]);

	// METHOD
	const onStartChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStartValue(e.target.value);
		rest.startOption?.onChange?.(e);
	};
	const onEndChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEndValue(e.target.value);
		rest.endOption?.onChange?.(e);
	};
	const clearValue = () => {
		setStartValue("");
		setEndValue("");
		layoutHook.changeErrorMessage(null);
	};

	const checkValidation = () => {
		// required
		if (rest.option?.required && (startValue || endValue)) {
			setIsError(true);
			layoutHook.changeErrorMessage(DATA_ERROR.validation.required);
			return;
		}

		// true
		setIsError(false);
		layoutHook.changeErrorMessage(null);
	};

	return { layout: layoutHook, value, startValue, onStartChange, endValue, onEndChange, clearValue, checkValidation, isError, ...rest };
};

export default useInputDuration;
