import { createContext, useState, useContext } from "react";

export const AppContext = createContext({
	globalLoading: true,
	setLoading: null
});

const AppProvider = ({ children }) => {
	const [globalLoading, setGlobalLoading] = useState(true);

	const setLoading = (bol) => {
		setGlobalLoading(bol);
	};

	return <AppContext.Provider value={{ globalLoading, setLoading }}>{children}</AppContext.Provider>;
};

export const useLoading = () => {
	const loading = useContext(AppContext).globalLoading;
	return loading;
};

export const setLoading = () => {
	const set = useContext(AppContext).setLoading;
	return set;
};

export default AppProvider;
