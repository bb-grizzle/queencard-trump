import { UseInputLayoutPropsType, UseInputLayoutResultType } from "@/hook/input/useInputLayout";
import { ValidationType } from "@/util/validation";
import { ChangeEvent, InputHTMLAttributes } from "react";
import { UseInputSharedResultType } from "./shared";

export type UseInputDurationType = (props: UseInputDurationPropsType) => UseInputDurationResultType;

type UseInputDurationPropsType = {
	layout: UseInputLayoutPropsType;
	option?: InputHTMLAttributes<HTMLInputElement>;
	startOption?: InputHTMLAttributes<HTMLInputElement>;
	endOption?: InputHTMLAttributes<HTMLInputElement>;
	validation?: ValidationType;
};

export type UseInputDurationResultType = UseInputDurationPropsType &
	UseInputSharedResultType & {
		layout: UseInputLayoutResultType;
		value: DurationValueType;
		startValue: string;
		onStartChange: (e: ChangeEvent<HTMLInputElement>) => void;
		endValue: string;
		onEndChange: (e: ChangeEvent<HTMLInputElement>) => void;
	};

export type DurationValueType = {
	start: string;
	end: string;
} | null;
