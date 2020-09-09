import { createContext, useState, useContext, useEffect } from "react";

export const AppContext = createContext({
	globalLoading: true,
	setGlobalLoading: null
});

const AppProvider = ({ children }) => {
	const [globalLoading, setGlobalLoading] = useState(false);

	useEffect(() => {
		if (globalLoading) {
			document.body.style.height = "100vh";
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.height = "auto";
			document.body.style.overflow = "auto";
		}
	}, [globalLoading]);

	const setLoading = (bol) => {
		setGlobalLoading(bol);
	};

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
