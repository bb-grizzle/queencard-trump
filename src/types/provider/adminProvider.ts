import { Dispatch, SetStateAction } from "react";

export type AdminContextType = {
	actionState: [AdminActionEnum, Dispatch<SetStateAction<AdminActionEnum>>];
	formState: [Object, Dispatch<Object>];
	formValidationState: [boolean | undefined, Dispatch<SetStateAction<boolean | undefined>>];
};

export enum AdminActionEnum {
	NONE,
	EDIT,
	ADD,
}
