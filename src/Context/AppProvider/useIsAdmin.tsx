import { useContext } from "react";
import { AppContext } from ".";

export const useIsAdmin = () => {
	const isAdmin = useContext(AppContext).isAdmin;
	return { isAdmin };
};
