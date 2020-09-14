import { createContext, useState, useContext, useEffect } from "react";

export const AppContext = createContext({
	globalLoading: false,
	setGlobalLoading: null
});

const AppProvider = ({ children }) => {
	const [globalLoading, setGlobalLoading] = useState(false);

	return <AppContext.Provider value={{ globalLoading, setGlobalLoading }}>{children}</AppContext.Provider>;
};

export const useLoading = () => {
	const loading = useContext(AppContext).globalLoading;
	return loading;
};

export const setLoading = () => {
	const set = useContext(AppContext).setGlobalLoading;
	return set;
};

export default AppProvider;
