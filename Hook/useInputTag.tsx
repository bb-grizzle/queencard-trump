import { useState } from "react";
import useInput, { InputDefaultProps } from "./useInput";

const useInputTag = (val?: string[]) => {
	const [value, setValue] = useState<string[]>(val ? val : []);
	const textInput = useInput("");

	const onAdd = (input: InputDefaultProps) => {
		setValue((prev) => [...prev, input.value.split(",")[0]]);
		input.setValue("");
	};
	const onDelete = (id: number) => {
		setValue((prev) => prev.filter((el, index) => index !== id));
	};
	const init = () => {
		setValue([]);
		textInput.init();
	};

	return { value, onAdd, onDelete, init, textInput, setValue };
};

export default useInputTag;
