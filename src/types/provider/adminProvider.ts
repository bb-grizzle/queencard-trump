import { Dispatch, SetStateAction } from "react";

export type AdminContextType = {
	actionState: [AdminActionEnum, Dispatch<SetStateAction<AdminActionEnum>>];
	formState: [Object, Dispatch<Object>];
};

export enum AdminActionEnum {
	NONE,
	EDIT,
	ADD,
}
