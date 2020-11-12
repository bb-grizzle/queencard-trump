import { createContext, useState, useContext, useEffect, SetStateAction, Dispatch } from "react";
import useSize from "../Hook/useSize";
import { preventScroll, activeScroll } from "../util/preventScroll";
import { useRouter } from "next/router";
import { fbAuthListener } from "../Firebase/firebase";

interface AppContextProps {
	globalLoading: boolean;
	setGlobalLoading: Dispatch<SetStateAction<boolean>>;
	isMenuClick: boolean;
	setIsMenuClick: Dispatch<SetStateAction<boolean>>;
	isAdmin: boolean;
	isLoggedIn: boolean;
	setIsLoggedInt: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext({} as AppContextProps);

const AppProvider = ({ children }) => {
	const [globalLoading, setGlobalLoading] = useState(false);
	const [isMenuClick, setIsMenuClick] = useState(false);
	const { isTablet } = useSize();
	const router = useRouter();
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoggedIn, setIsLoggedInt] = useState(false);

	useEffect(() => {
		fbAuthListener(setIsLoggedInt);
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

	return <AppContext.Provider value={{ globalLoading, setGlobalLoading, isMenuClick, setIsMenuClick, isAdmin, isLoggedIn, setIsLoggedInt }}>{children}</AppContext.Provider>;
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

export const useIsLoggedIn = () => {
	const isLoggedIn = useContext(AppContext).isLoggedIn;
	const setIsLoggedInt = useContext(AppContext).setIsLoggedInt;
	const { push } = useRouter();

	const redirectToLogin = () => {
		if (!isLoggedIn) {
			push("/_admin/signin");
		}
	};

	return { isLoggedIn, setIsLoggedInt, redirectToLogin };
};

export default AppProvider;
