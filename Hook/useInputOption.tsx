import { useState } from "react";

const useInputOption = (val) => {
	const [value, setValue] = useState(val);

	const onChange = (e) => {
		setValue(e.target.value);
	};
	const init = () => {
		setValue(val);
	};

	return { value, setValue, onChange, init };
};

export default useInputOption;
