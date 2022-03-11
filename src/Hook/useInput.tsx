import { useState, Dispatch } from "react";

export interface OptionProps {
	placeholder: string;
	label?: string;
	type?: string;
}
export interface InputDefaultProps extends OptionProps {
	value: any;
	setValue: Dispatch<any>;
	onChange: (e: any) => void;
	init: () => void;
}

type useInputType = (initVal?: string | number, option?: OptionProps) => InputDefaultProps;

const useInput: useInputType = (initVal, option) => {
	const [value, setValue] = useState(initVal ? initVal : "");

	const onChange = (value: string) => {
		setValue(value);
	};
	const init = () => {
		setValue(initVal);
	};

	return { ...option, value, setValue, onChange, init };
};

export default useInput;
