import { useState, Dispatch } from "react";

export interface InputDefaultProps {
	value: any;
	setValue: Dispatch<any>;
	onChange: (e: any) => void;
	init: () => void;
}

const useInput = (val): InputDefaultProps => {
	const [value, setValue] = useState(val);

	const onChange = (value: string) => {
		setValue(value);
	};
	const init = () => {
		setValue(val);
	};

	return { value, setValue, onChange, init };
};

export default useInput;
