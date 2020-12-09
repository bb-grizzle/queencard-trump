import { optionProps } from "./input";

export interface ContactFormProps {
	label: string;
	caption?: string;
	type: ContactFormType;
}

export interface ContactFormTextProps extends ContactFormProps {
	placeholder: string;
}
export interface ContactFormOptionProps extends ContactFormProps {
	option: optionProps[];
}

export enum ContactFormType {
	CHECKBOX = "checkbox",
	RADIO = "radio",
	TEXT = "text",
	TEXTAREA = "textarea",
	FILE = "file"
}
