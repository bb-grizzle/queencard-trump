import { useState, useEffect } from "react";
import useInput from "./useInput";
import useInputFile from "./useInputFile";
import { fbUploadStorage, fbDeleteStorage } from "../Firebase/firebase";

const useContents = () => {
	// 수정되었을 때
	// - 이미지 삭제
	// -
	const [value, setValue] = useState([]);
	const titleInput = useInput("");
	const imageInput = useInputFile();
	const [deleteFiles, setDeleteFiles] = useState([]);

	const onAdd = () => {
		setValue((prev) => [...prev, { title: titleInput.value, image: imageInput.file }]);
		titleInput.init();
		imageInput.init();
	};

	const onDelete = (data, i) => {
		setValue((prev) => prev.filter((el, index) => index !== i));
		if (!!data.image.url) {
			setDeleteFiles((prev) => (prev ? [...prev, data.image.prevUrl] : [data.image.prevUrl]));
		}
	};
	const init = () => {
		setValue([]);
		titleInput.init();
		imageInput.init();
		setDeleteFiles([]);
	};

	const upload = async (path) => {
		const result = await Promise.all(
			value.map(async (el, index) => {
				const image = await fbUploadStorage(path, `${Date.now()}_${el.image.name}`, el.image);
				return { ...el, image };
			})
		);
		return result;
	};

	const update = async (path) => {
		const result = await Promise.all(
			value.map(async (el, index) => {
				const image = el.image.url ? el.image : await fbUploadStorage(path, `${Date.now()}_${el.image.name}`, el.image);
				return { ...el, image };
			})
		);
		if (!!deleteFiles && !!deleteFiles[0]) {
			await Promise.all(
				deleteFiles.map(async (el) => {
					await fbDeleteStorage(el);
				})
			);
		}
		return result;
	};

	const deleteContents = async () => {
		await Promise.all(
			value.map(async (el, index) => {
				if (el.image.prevUrl) {
					await fbDeleteStorage(el.image.prevUrl);
				}
				// const image = el.image.url ? el.image : await fbUploadStorage(path, `${Date.now()}_${el.image.name}`, el.image);
				// return { ...el, image };
			})
		);
	};

	return { value, setValue, onAdd, onDelete, init, title: titleInput, image: imageInput, upload, update, deleteContents };
};

export default useContents;
