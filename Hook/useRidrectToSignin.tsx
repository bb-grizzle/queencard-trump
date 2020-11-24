import { useIsLoggedIn } from "../Context/AppProvider";
import { useEffect } from "react";

const useRidrectToSignin = () => {
	const { redirectToLogin, isLoggedIn } = useIsLoggedIn();
	return useEffect(() => {
		redirectToLogin();
	}, [isLoggedIn]);
};

export default useRidrectToSignin;