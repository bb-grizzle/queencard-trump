import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import useInputLayout, { UseInputLayoutPropsType, UseInputLayoutResultType } from "./useInputLayout";
import { ValidationType } from "@/util/validation";

type UseInputDurationType = (props: UseInputDurationPropsType) => UseInputDurationResultType;

type UseInputDurationPropsType = {
	layout: UseInputLayoutPropsType;
	startOption?: InputHTMLAttributes<HTMLInputElement>;
	endOption?: InputHTMLAttributes<HTMLInputElement>;
	validation?: ValidationType;
};

export type UseInputDurationResultType = UseInputDurationPropsType & {
	layout: UseInputLayoutResultType;
	startValue: string;
	onStartChange: (e: ChangeEvent<HTMLInputElement>) => void;
	endValue: string;
	onEndChange: (e: ChangeEvent<HTMLInputElement>) => void;
	clearValue: () => void;
};

const useInputDuration: UseInputDurationType = ({ layout, ...rest }) => {
	const layoutHook = useInputLayout(layout);
	const [startValue, setStartValue] = useState<string>("");
	const [endValue, setEndValue] = useState<string>("");

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

	return { layout: layoutHook, startValue, onStartChange, endValue, onEndChange, clearValue, ...rest };
};

export default useInputDuration;
