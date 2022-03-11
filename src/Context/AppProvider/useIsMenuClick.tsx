import { useContext } from "react";
import { AppContext } from ".";

export const useIsMenuClick = () => {
	const isMenuClick = useContext(AppContext).isMenuClick;
	const setIsMenuClick = useContext(AppContext).setIsMenuClick;

	return { isMenuClick, setIsMenuClick };
};
