type DataErrorType = {
	[key: string]: { [key: string]: string };
};

export const DATA_ERROR: DataErrorType = {
	normal: {
		default: "서버에 문제가 생겼어요... 🥲",
	},
};
