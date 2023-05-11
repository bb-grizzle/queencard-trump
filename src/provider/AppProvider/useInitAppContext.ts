import { AppContextProps } from "@/types/provider/appProvider";
import { setFullHeight } from "@/util/setFullHeight";
import { useEffect } from "react";

const useInitAppContext = (ctx: AppContextProps) => {
	const { isLoggedInState } = ctx;
	const [_, setIsLoggedIn] = isLoggedInState;
	// STATE
	// : set full height
	useEffect(() => {
		window.addEventListener("resize", setFullHeight);
		return () => {
			window.removeEventListener("resize", setFullHeight);
		};
	}, []);

	// : check token
	useEffect(() => {
		const token = window.localStorage.getItem("token");
		if (token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
		// eslint-disable-next-line
	}, []);

	return;
};

export default useInitAppContext;
