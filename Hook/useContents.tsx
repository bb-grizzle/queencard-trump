import { useState } from "react";
import useInput from "./useInput";
import { fbUploadStorage, fbDeleteStorage } from "../Firebase/firebase";
import useInputManyFile from "./useInputManyFile";

const useContents = ({ isText }) => {
	const [value, setValue] = useState([]);

	const titleInput = useInput("");
	const textInput = useInput("");
	const imageInput = useInputManyFile();

	const [nowContents, setNowContets] = useState(null);

	const onAdd = () => {
		setValue((prev) => {
			let updateValue;
			if (isText === true) {
				updateValue = [...prev, { title: titleInput.value, text: textInput.value, image: imageInput.files }];
			} else {
				updateValue = [...prev, { title: titleInput.value, image: imageInput.files }];
			}
			return updateValue;
		});
		titleInput.init();
		imageInput.init();
		textInput.init();
	};

	const onDelete = (data, i) => {
		setValue((prev) => prev.filter((el, index) => index !== i));

		if (!!data.image) {
			data.image.map((el) => {
				if (el.prevUrl) {
					imageInput.setDeleteFiles((prev) => (prev ? [...prev, el.prevUrl] : [el.prevUrl]));
				}
			});
		}
	};
	const init = () => {
		setValue([]);
		titleInput.init();
		imageInput.init();
		textInput.init();
		imageInput.setDeleteFiles([]);
	};

	const upload = async (path) => {
		return await Promise.all(
			value.map(async (el) => {
				const image = await uploadManyFiles(el.image, path);
				return {
					...el,
					image
				};
			})
		);
	};

	const uploadManyFiles = async (images, path) => {
		return await Promise.all(
			images.map(async (el) => {
				return el.prevUrl ? el : await fbUploadStorage(path, `${Date.now()}_${el.fileName}`, el.file);
			})
		);
	};

	const update = async (path) => {
		const result = await Promise.all(
			value.map(async (el) => {
				const image = await uploadManyFiles(el.image, path);
				return {
					...el,
					image
				};
			})
		);

		if (!!imageInput.deleteFiles && !!imageInput.deleteFiles[0]) {
			await Promise.all(
				imageInput.deleteFiles.map(async (el) => {
					await fbDeleteStorage(el);
				})
			);
		}

		imageInput.setDeleteFiles([]);
		return result;
	};

	const onEdit = () => {
		setValue((prev) =>
			prev.map((el, index) => {
				if (index === nowContents.index) {
					const title = titleInput.value;
					const text = titleInput.value;
					const image = imageInput.files;
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
			value.map(async (el) => {
				el.image.map(async (file) => {
					await fbDeleteStorage(file.prevUrl);
				});
			})
		);
	};

	const onListClick = (data) => {
		setNowContets(data);
		titleInput.setValue(data.title);
		if (!!data.text) {
			textInput.setValue(data.text);
		}
		imageInput.setFiles(data.image);
	};

	return { value, setValue, onAdd, onDelete, init, title: titleInput, image: imageInput, text: textInput, upload, update, onEdit, deleteContents, onListClick, isText, nowContents };
};

export default useContents;
