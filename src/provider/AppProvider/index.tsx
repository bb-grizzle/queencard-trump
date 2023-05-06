import { createContext, ReactNode, useRef, useState } from "react";
import useInitAppContext from "./useInitAppContext";
import { AppContextProps } from "@/types/provider/appProvider";

interface AppProviderProps {
	children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	// FIELD
	// const isLoggedInState = useState<boolean | null>(true);
	const isLoggedInState = useState<boolean | null>(true);
	const globalDimState = useState<boolean>(false);
	const globalDimOnClick = useRef<any>(null);
	const isMenuClickState = useState(false);

	// VALUE
	const value: AppContextProps = {
		isLoggedInState,
		globalDimState,
		globalDimOnClick,
		isMenuClickState,
	};

	// INIT
	useInitAppContext(value);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
