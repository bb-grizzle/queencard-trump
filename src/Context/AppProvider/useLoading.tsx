import { useContext } from "react";
import { AppContext } from ".";

export const useLoading = () => {
	const loading = useContext(AppContext).globalLoading;
	const setLoading = useContext(AppContext).setGlobalLoading;

	const startLoading = () => {
		setLoading(true);
	};
	const endLoading = () => {
		setLoading(false);
	};

	return { loading, startLoading, endLoading };
};
