import { useState, useEffect } from "react";
import useInput from "./useInput";
import { fbUploadStorage, fbDeleteStorage } from "../Firebase/firebase";
import useInputManyFile from "./useInputManyFile";
import { ContentsProps } from "../Interface/portfolio";

const useContents = ({ isText, onlySlider }) => {
	const [value, setValue] = useState([]);
	const titleInput = useInput("");
	const textInput = useInput("");
	const imageInput = useInputManyFile();
	const [isSlider, setIsSlider] = useState(true);

	const [nowContents, setNowContets] = useState(null);

	const onAdd = () => {
		setValue((prev) => {
			let updateValue: ContentsProps = {
				title: titleInput.value,
				image: imageInput.files
			};

			if (isText) {
				updateValue = { ...updateValue, text: textInput.value };
			}

			if (!onlySlider) {
				updateValue = { ...updateValue, isSlider: isSlider === undefined ? true : isSlider };
			}

			return [...prev, updateValue];
		});
		titleInput.init();
		imageInput.init();
		textInput.init();
		setIsSlider(true);
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
		setIsSlider(true);
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
		console.log("UPDATE");
		const result = await Promise.all(
			value.map(async (el) => {
				const image = await uploadManyFiles(el.image, path);
				return {
					...el,
					image
				};
			})
		);
		console.log(result);

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

	useEffect(() => {
		console.log(value);
	}, [value]);

	const onEdit = () => {
		setValue((prev) =>
			prev.map((el, index) => {
				if (index === nowContents.index) {
					const title = titleInput.value;
					const text = textInput.value;
					const image = imageInput.files;
					return !onlySlider
						? {
								title,
								text,
								image,
								isSlider: isSlider === undefined ? true : isSlider
						  }
						: {
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
		setIsSlider(false);
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

		if (!onlySlider) {
			setIsSlider(data.isSlider);
		}

		if (!!data.text) {
			textInput.setValue(data.text);
		}
		imageInput.setFiles(data.image);
	};

	return {
		value,
		setValue,
		onAdd,
		onDelete,
		init,
		title: titleInput,
		image: imageInput,
		text: textInput,
		upload,
		update,
		onEdit,
		deleteContents,
		onListClick,
		isText,
		nowContents,
		setIsSlider,
		isSlider,
		onlySlider
	};
};

export default useContents;
