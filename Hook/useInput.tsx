import { useState } from "react";

const useInput = (init) => {
	const [value, setValue] = useState(init);

	const onChange = (e) => {
		console.log(e.target.value);
		setValue(e.target.value);
	};

	return { value, setValue, onChange };
};

export default useInput;
