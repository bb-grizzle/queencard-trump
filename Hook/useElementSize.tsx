import { useRef, useState, useEffect } from "react";
import useSize from "./useSize";

const useElementSize = () => {
	const ref = useRef<HTMLDivElement>();
	const { width } = useSize();
	const [size, setSize] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setSize(ref.current.getBoundingClientRect().width);
		}
	}, [ref, width]);

	return { size, ref };
};

export default useElementSize;
