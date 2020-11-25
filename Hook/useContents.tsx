import { useState, useEffect } from "react";
import useInput from "./useInput";
import useInputFile from "./useInputFile";
import { fbUploadStorage, fbDeleteStorage } from "../Firebase/firebase";

const useContents = ({ isText }) => {
	const [value, setValue] = useState([]);
	const titleInput = useInput("");
	const textInput = useInput("");
	const imageInput = useInputFile();
	const [deleteFiles, setDeleteFiles] = useState([]);
	const [nowContents, setNowContets] = useState(null);

	const onAdd = () => {
		setValue((prev) => {
			let updateValue;
			if (isText === true) {
				updateValue = [...prev, { title: titleInput.value, text: textInput.value, image: { file: imageInput.file, url: imageInput.url, fileName: imageInput.fileName } }];
			} else {
				updateValue = [...prev, { title: titleInput.value, image: { file: imageInput.file, url: imageInput.url, fileName: imageInput.fileName } }];
			}
			return updateValue;
		});
		titleInput.init();
		imageInput.init();
		textInput.init();
	};

	const onDelete = (data, i) => {
		setValue((prev) => prev.filter((el, index) => index !== i));
		if (!!data.image.prevUrl) {
			setDeleteFiles((prev) => (prev ? [...prev, data.image.prevUrl] : [data.image.prevUrl]));
		}
	};
	const init = () => {
		setValue([]);
		titleInput.init();
		imageInput.init();
		textInput.init();
		setDeleteFiles([]);
	};

	const upload = async (path) => {
		const result = await Promise.all(
			value.map(async (el, index) => {
				const image = await fbUploadStorage(path, `${Date.now()}_${el.image.fileName}`, el.image.file);
				return { ...el, image };
			})
		);
		return result;
	};

	const update = async (path) => {
		const result = await Promise.all(
			value.map(async (el, index) => {
				const image = el.image.prevUrl ? el.image : await fbUploadStorage(path, `${Date.now()}_${el.image.fileName}`, el.image.file);
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

	const onEdit = () => {
		if (imageInput.file && nowContents.image.prevUrl) {
			console.log("");
			setDeleteFiles((prev) => [...prev, nowContents.image.prevUrl]);
		}
		setValue((prev) =>
			prev.map((el, index) => {
				if (index === nowContents.index) {
					const title = titleInput.value;
					const text = titleInput.value;
					const image = imageInput.file ? { file: imageInput.file, url: imageInput.url, fileName: imageInput.fileName } : nowContents.image;
					return {
						title,
						text,
						image
					};
				} else {
					return el;
				}
			})
		);
		titleInput.init();
		imageInput.init();
		textInput.init();
		setNowContets(null);
	};

	const deleteContents = async () => {
		await Promise.all(
			value.map(async (el, index) => {
				if (el.image.prevUrl) {
					await fbDeleteStorage(el.image.prevUrl);
				}
			})
		);
	};

	const onListClick = (data) => {
		setNowContets(data);
		titleInput.setValue(data.title);
		if (!!data.text) {
			textInput.setValue(data.text);
		}
		imageInput.setValue(data.image.fileName);
	};

	return { value, setValue, onAdd, onDelete, init, title: titleInput, image: imageInput, text: textInput, upload, update, onEdit, deleteContents, onListClick, isText, nowContents };
};

export default useContents;
