import { FileType } from "@/hook/input/useInputImage";

type ReadAsDataURLType = (file: File) => Promise<FileType>;

export const readAsDataURL: ReadAsDataURLType = (file) => {
	return new Promise((resolve, reject) => {
		let fileReader = new FileReader();
		fileReader.onload = function () {
			const base64 = fileReader.result;
			if (base64) {
				return resolve({ base64: base64 ?? null, name: file.name, file });
			}
		};
		fileReader.onerror = function (error) {
			return reject(error);
		};
		fileReader.readAsDataURL(file);
	});
};
