import { createContext, useState, useContext, useEffect, SetStateAction, Dispatch } from "react";
import useSize from "../Hook/useSize";
import { preventScroll, activeScroll } from "../util/scroll";
import { useRouter } from "next/router";
import { checkBrowser } from "../util/checkBrowser";

interface AppContextProps {
	globalLoading: boolean;
	setGlobalLoading: Dispatch<SetStateAction<boolean>>;
	isMenuClick: boolean;
	setIsMenuClick: Dispatch<SetStateAction<boolean>>;
	isAdmin: boolean;
	isIe: boolean;
}

export const AppContext = createContext({} as AppContextProps);

const AppProvider = ({ children }) => {
	const [globalLoading, setGlobalLoading] = useState(false);
	const [isMenuClick, setIsMenuClick] = useState(false);
	const { isTablet } = useSize();
	const router = useRouter();
	const [isAdmin, setIsAdmin] = useState(false);
	const [isIe, setIsIe] = useState(false);

	useEffect(() => {
		const result = checkBrowser();
		if (result === "11.0" || result === "10.0" || result === "9.0") {
			setIsIe(true);
		} else {
			setIsIe(false);
		}
	}, []);

	// make ismenuclick false when media changed
	useEffect(() => {
		setIsMenuClick(false);
	}, [isTablet]);

	// prevent scroll when ismenuclick is true
	useEffect(() => {
		if (isMenuClick) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [isMenuClick]);

	useEffect(() => {
		if (router.pathname.includes("_admin")) {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	}, [router]);

	return (
		<AppContext.Provider
			value={{
				globalLoading,
				setGlobalLoading,
				isMenuClick,
				setIsMenuClick,
				isAdmin,
				isIe
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useLoading = () => {
	const loading = useContext(AppContext).globalLoading;
	const setLoading = useContext(AppContext).setGlobalLoading;

	return { loading, setLoading };
};

export const useIsMenuClick = () => {
	const isMenuClick = useContext(AppContext).isMenuClick;
	const setIsMenuClick = useContext(AppContext).setIsMenuClick;

	return { isMenuClick, setIsMenuClick };
};

export const useIsAdmin = () => {
	const isAdmin = useContext(AppContext).isAdmin;
	return { isAdmin };
};

export const useIsIe = () => {
	const { isIe } = useContext(AppContext);
	return { isIe };
};

export default AppProvider;
