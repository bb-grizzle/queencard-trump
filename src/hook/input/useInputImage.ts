import { ChangeEvent, InputHTMLAttributes, RefObject, useEffect, useRef, useState } from "react";
import useInputLayout, { UseInputLayoutPropsType, UseInputLayoutResultType } from "./useInputLayout";
import { ValidationType, checkFileDimension, checkFileSize } from "@/util/validation";
import { readAsDataURL } from "@/util/readAsDataURL";
import { DATA_ERROR } from "@/data/error";
import { filesize } from "filesize";

type UseInputImageType = (props: UseInputImagePropsType) => UseInputImageResultType;

type UseInputImagePropsType = {
	layout: UseInputLayoutPropsType;
	option?: InputHTMLAttributes<HTMLInputElement>;
	init?: FileType[];
	validation?: ValidationType;
	sizeLimit?: SizeLimitType;
	dimensionLimit?: DimensionLimitType;
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

const useInputImage: UseInputImageType = ({ layout, validation, init, sizeLimit, dimensionLimit, ...rest }) => {
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
			const files = Array.from(e.target.files);

			// 01. check size
			const fileCheckedFiles = files.filter((file) => {
				if (sizeLimit) {
					const check = checkFileSize(file.size, sizeLimit);
					if (!check) {
						alert(`${sizeLimit.size}${sizeLimit.unit}이하의 파일만 업로드 가능합니다. \n- filename: ${file.name} \n- size: ${filesize(file.size, { base: 2, standard: "jedec" })}`);
					}
					return check;
				} else {
					return true;
				}
			});

			// 02. check dimension
			const dimPromises = await fileCheckedFiles.map((file) => (dimensionLimit ? checkFileDimension(file, dimensionLimit) : file));
			const checkDim = await Promise.all(dimPromises);
			const dimCheckedFiles = fileCheckedFiles.filter((file, index) => {
				const { width, height, result } = checkDim[index] as any;
				if (!result && dimensionLimit) {
					alert(`${dimensionLimit.width}px x ${dimensionLimit.height}px 이하의 파일만 업로드 가능합니다. \n- filename: ${file.name} \n- width: ${width}px \n- height: ${height}px `);
				}
				return result;
			});

			const images = await Promise.all(
				dimCheckedFiles.map(async (file) => {
					const readFile = await readAsDataURL(file);
					return readFile;
				})
			);
			setFiles((prev) => (prev ? [...prev, ...images] : images));
			e.target.value = "";
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
		if (rest.option?.required && files === null) {
			layoutHook.changeErrorMessage(DATA_ERROR.validation.required);
			return;
		}
	};

	return { layout: layoutHook, fileRef, onUpload, onChange, clearValue, checkValidation, onDelete, files, ...rest };
};

export default useInputImage;
