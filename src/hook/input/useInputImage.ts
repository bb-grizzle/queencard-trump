import { ChangeEvent, InputHTMLAttributes, RefObject, useEffect, useRef, useState } from "react";
import useInputLayout, { UseInputLayoutPropsType, UseInputLayoutResultType } from "./useInputLayout";
import { ValidationType } from "@/util/validation";
import { readAsDataURL } from "@/util/readAsDataURL";

type UseInputImageType = (props: UseInputImagePropsType) => UseInputImageResultType;

type UseInputImagePropsType = {
	layout: UseInputLayoutPropsType;
	option?: InputHTMLAttributes<HTMLInputElement>;
	init?: FileType[];
	validation?: ValidationType;
};

export type UseInputImageResultType = UseInputImagePropsType & {
	layout: UseInputLayoutResultType;
	fileRef: RefObject<HTMLInputElement>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	clearValue: () => void;
	checkValidation: () => void;
	onUpload: () => void;
	files: FileType[] | null;
	onDelete: (index: number) => void;
};

export type FileType = {
	url?: string;
	base64?: string | ArrayBuffer;
	file?: File;
	name: string;
};

const useInputImage: UseInputImageType = ({ layout, validation, init, ...rest }) => {
	// FIELD
	const fileRef = useRef<HTMLInputElement>(null);
	const layoutHook = useInputLayout(layout);
	const [files, setFiles] = useState<FileType[] | null>(null);

	// STATE
	// iinit files
	useEffect(() => {
		if (!init) return;

		setFiles(init);
	}, [init]);

	// METHOD
	const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
		rest.option?.onChange?.(e);

		if (e.target.files) {
			const images = await Promise.all(
				Array.from(e.target.files).map((file) => {
					return readAsDataURL(file);
				})
			);
			setFiles((prev) => (prev ? [...prev, ...images] : images));
		}
	};

	const clearValue = () => {
		layoutHook.changeErrorMessage(null);
	};

	const onUpload = () => {
		fileRef.current?.click();
	};

	const onDelete = (index: number) => {
		setFiles((prev) => (prev ? prev?.filter((_, fileIndex) => fileIndex !== index) : null));
	};

	const checkValidation = () => {
		// requried
		// size
		// demesion
	};

	return { layout: layoutHook, fileRef, onUpload, onChange, clearValue, checkValidation, onDelete, files, ...rest };
};

export default useInputImage;
