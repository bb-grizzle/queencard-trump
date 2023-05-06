import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import useGlobalDim from "./useGlobalDim";
import { AppContext } from ".";

const useMenu = () => {
	const { isMenuClickState } = useContext(AppContext);
	const [isActive, setIsClicked] = isMenuClickState;
	const { pathname } = useRouter();
	const { hideDim, activeDim, setDimClick } = useGlobalDim();

	useEffect(() => {
		setIsClicked(false);
	}, [pathname]);

	const closeMenu = () => {
		hideDim();
		setIsClicked(false);
	};

	const openMenu = () => {
		activeDim();
		setIsClicked(true);
		setDimClick(closeMenu);
	};

	return { isActive, closeMenu, openMenu };
};

export default useMenu;
