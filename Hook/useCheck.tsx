import { useState } from "react";

const useCheck = (init) => {
	const [value, setValue] = useState(init);

	const onChange = () => {
		setValue((n) => !n);
	};

	return { value, setValue, onChange };
};

export default useCheck;
