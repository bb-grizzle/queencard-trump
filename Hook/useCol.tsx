import { useState, useEffect } from "react";
import useSize from "./useSize";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, BREAKPOINT_MOBILE } from "../Styles/media";
interface useColProps {
	pc: number;
	tablet?: number;
	mobile?: number;
}
const useCol = ({ pc, tablet, mobile }: useColProps) => {
	const [col, setCol] = useState(pc);
	const { width } = useSize();

	useEffect(() => {
		if (width < BREAKPOINT_TABLET && tablet) {
			setCol(tablet);
		} else if (width < BREAKPOINT_MOBILE && mobile) {
			setCol(mobile);
		} else {
			setCol(pc);
		}
	}, [width]);

	return { col };
};

export default useCol;
