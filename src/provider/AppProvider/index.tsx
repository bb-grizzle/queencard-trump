import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import useInitAppContext from "./useInitAppContext";

interface AppProviderProps {
	children: ReactNode;
}

export type AppContextProps = {
	isMenuClickedState: [boolean, Dispatch<SetStateAction<boolean>>];
};

export const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	// FIELD
	const isMenuClickedState = useState(false);

	// VALUE
	const value: AppContextProps = {
		isMenuClickedState,
	};

	// INIT
	useInitAppContext(value);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
