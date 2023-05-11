import { DimensionLimitType, SizeLimitType, SizeUnit } from "@/types/input/image";

export enum ValidationType {
	EMAIL = "email",
	PW = "password",
	FILE = "file",
}

export const checkFileSize = (value: number, limit: SizeLimitType) => {
	const { unit, size } = limit;
	let limitSize = 500;
	if (unit === SizeUnit.KB) {
		limitSize = size * 1000;
	} else if (unit === SizeUnit.MB) {
		limitSize = size * 1e6;
	} else if (unit === SizeUnit.GB) {
		limitSize = size * 1e9;
	} else {
		return false;
	}

	return value < limitSize;
};

export const checkFileDimension = (file: File, limit: DimensionLimitType) => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.onload = function () {
			if (!fileReader.result) return;
			const img = new Image();
			img.src = fileReader.result.toString();

			img.onload = (e: any) => {
				resolve({
					width: e.target.width,
					height: e.target.height,
					result: limit.width > e.target.width && limit.height > e.target.height,
				});
			};
		};
		fileReader.onerror = function (error) {
			return reject(error);
		};
		fileReader.readAsDataURL(file);
	});
};

export const inputValidation: { [key: string]: { reg: RegExp; error: string } } = {
	[ValidationType.EMAIL]: {
		reg: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
		error: "이메일을 다시 확인해주세요. 😅",
	},
	[ValidationType.PW]: {
		reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/,
		error: "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요. 😅",
	},
};
