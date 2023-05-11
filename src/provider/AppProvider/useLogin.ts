import { useContext } from "react";
import { AppContext } from ".";

const useLogin = () => {
	const { isLoggedInState } = useContext(AppContext);
	const [isLoggedIn, setIsLoggedIn] = isLoggedInState;

	const clientLogin = (token: string) => {
		window.localStorage.setItem("token", token);
		setIsLoggedIn(true);
	};

	const clientLogout = () => {
		setIsLoggedIn(false);
	};

	return { isLoggedIn, clientLogin, clientLogout };
};

export default useLogin;
