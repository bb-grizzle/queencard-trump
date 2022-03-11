import { useState, useEffect } from "react";
import { optionProps } from "../Interface/input";

interface useInputCheckboxProps {
	initOption: optionProps[];
}

const useInputCheckbox = ({ initOption }: useInputCheckboxProps) => {
	const [value, setValue] = useState(null);
	const [option, setOptsion] = useState(initOption.map((el) => ({ ...el, active: false })));

	const onChange = (value: string) => {
		setOptsion((prev) => prev.map((el) => (el.value === value ? { ...el, active: !el.active } : el)));
	};

	const init = () => {
		setValue(null);
	};

	useEffect(() => {
		setValue(option.filter((el) => el.active).map((el) => el.value));
	}, [option]);

	return { value, setValue, onChange, init, option };
};

export default useInputCheckbox;
