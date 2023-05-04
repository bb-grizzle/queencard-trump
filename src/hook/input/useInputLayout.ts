import { useState } from "react";

type UseInputLayoutType = (props: UseInputLayoutPropsType) => UseInputLayoutResultType;

export type UseInputLayoutPropsType = {
	label: string;
	note?: string;
};

export type UseInputLayoutResultType = UseInputLayoutPropsType & {
	errorMessage: string | null;
	changeErrorMessage: (value: string | null) => void;
};

const useInputLayout: UseInputLayoutType = (props) => {
	// FIELD
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	// STATE

	// METHOD
	// : change error message
	const changeErrorMessage = (value: string | null) => {
		setErrorMessage(value);
	};

	// RETURN
	return { ...props, errorMessage, changeErrorMessage };
};

export default useInputLayout;
