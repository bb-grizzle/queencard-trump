import { ButtonProps } from "@/components/shared/Button";
import { UseInputLayoutPropsType, UseInputLayoutResultType } from "@/hook/input/useInputLayout";
import { FormatType } from "@/util/formating";
import { ValidationType } from "@/util/validation";
import { ChangeEvent, InputHTMLAttributes } from "react";
import { UseInputSharedResultType } from "./shared";

export type UseInputDefaultType = (props: UseInputDefaultPropsType) => UseInputDefaultResultType;

type UseInputDefaultPropsType = {
	layout: UseInputLayoutPropsType;
	option?: InputHTMLAttributes<HTMLInputElement>;
	validation?: ValidationType;
	formating?: FormatType;
	button?: ButtonProps;
};

export type UseInputDefaultResultType = UseInputDefaultPropsType &
	UseInputSharedResultType & {
		layout: UseInputLayoutResultType;
		value: ValueType;
		onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	};

type ValueType = string | number | readonly string[];
