import { createContext, ReactNode } from "react";

interface HomeProviderProps {
	children: ReactNode;
}

export type HomeContextProps = {};

export const HomeContext = createContext({} as HomeContextProps);

const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
	const value: HomeContextProps = {};

	return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
