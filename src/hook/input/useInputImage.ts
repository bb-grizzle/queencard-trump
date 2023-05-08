import { ChangeEvent, useEffect, useRef, useState } from "react";
import useInputLayout from "./useInputLayout";
import { checkFileDimension, checkFileSize } from "@/util/validation";
import { readAsDataURL } from "@/util/readAsDataURL";
import { DATA_ERROR } from "@/data/error";
import { filesize } from "filesize";
import { FileType, UseInputImageType } from "@/types/input/image";

const useInputImage: UseInputImageType = ({ layout, validation, init, sizeLimit, dimensionLimit, ...rest }) => {
	// FIELD
	const layoutHook = useInputLayout(layout);
	const [value, setValue] = useState<FileType[] | null>(null);
	const [isError, setIsError] = useState(false);

	const fileRef = useRef<HTMLInputElement>(null);

	// STATE
	// iinit files
	useEffect(() => {
		if (!init) return;

		setValue(init);
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
			setValue((prev) => (prev ? [...prev, ...images] : images));
			e.target.value = "";
		}
	};

	const clearValue = () => {
		setValue(null);
		layoutHook.changeErrorMessage(null);
	};

	const onUpload = () => {
		fileRef.current?.click();
	};

	const onDelete = (index: number) => {
		setValue((prev) => (prev ? prev?.filter((_, fileIndex) => fileIndex !== index) : null));
	};

	const checkValidation = () => {
		// requried
		if (rest.option?.required && value === null) {
			layoutHook.changeErrorMessage(DATA_ERROR.validation.required);
			setIsError(true);
			return;
		}

		setIsError(false);
	};

	const changeValue = (value: any) => {
		console.log("value : ", value);
	};

	return { layout: layoutHook, fileRef, onUpload, onChange, clearValue, checkValidation, onDelete, value, isError, changeValue, ...rest };
};

export default useInputImage;
