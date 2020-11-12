import { createContext, useState, useContext, useEffect, SetStateAction, Dispatch } from "react";
import useSize from "../Hook/useSize";

interface AppContextProps {
	globalLoading: boolean;
	setGlobalLoading: Dispatch<SetStateAction<boolean>>;
	isMenuClick: boolean;
	setIsMenuClick: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext({} as AppContextProps);

const AppProvider = ({ children }) => {
	const [globalLoading, setGlobalLoading] = useState(false);
	const [isMenuClick, setIsMenuClick] = useState(false);
	const { isTablet } = useSize();

	useEffect(() => {
		setIsMenuClick(false);
	}, [isTablet]);

	return <AppContext.Provider value={{ globalLoading, setGlobalLoading, isMenuClick, setIsMenuClick }}>{children}</AppContext.Provider>;
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

export default AppProvider;
