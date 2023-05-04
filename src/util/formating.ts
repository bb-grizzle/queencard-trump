export enum FormatType {
	TEST = "test",
	PHONENUMBER = "phoneNumber",
}

const formatTest = (prev: string) => {
	return prev.replaceAll("a", "b");
};

const formatPhoneNumber = (prev: string) => {
	return prev;
};

export const inputFormating = {
	[FormatType.TEST]: formatTest,
	[FormatType.PHONENUMBER]: formatPhoneNumber,
};
