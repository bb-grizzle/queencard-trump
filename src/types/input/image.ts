import { UseInputLayoutPropsType, UseInputLayoutResultType } from "@/hook/input/useInputLayout";
import { ValidationType } from "@/util/validation";
import { ChangeEvent, InputHTMLAttributes, RefObject } from "react";
import { UseInputSharedResultType } from "./shared";

export type UseInputImageType = (props: UseInputImagePropsType) => UseInputImageResultType;

type UseInputImagePropsType = {
	layout: UseInputLayoutPropsType;
	option?: InputHTMLAttributes<HTMLInputElement>;
	init?: FileType[];
	validation?: ValidationType;
	sizeLimit?: SizeLimitType;
	dimensionLimit?: DimensionLimitType;
};

export type UseInputImageResultType = UseInputImagePropsType &
	Omit<UseInputSharedResultType, "value"> & {
		layout: UseInputLayoutResultType;
		fileRef: RefObject<HTMLInputElement>;
		onChange: (e: ChangeEvent<HTMLInputElement>) => void;
		onUpload: () => void;
		value: FileType[] | null;
		onDelete: (index: number) => void;
	};

export type DimensionLimitType = { width: number; height: number };

export type SizeLimitType = { size: number; unit: SizeUnit };

export enum SizeUnit {
	KB = "kb",
	MB = "mb",
	GB = "gb",
}

export type FileType = {
	url?: string;
	base64?: string | ArrayBuffer;
	file?: File;
	name: string;
};
