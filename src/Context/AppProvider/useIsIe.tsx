import { useContext } from "react";
import { AppContext } from ".";

export const useIsIe = () => {
	const { isIe } = useContext(AppContext);
	return { isIe };
};
