import { useIsLoggedIn } from "../Context/AppProvider";
import { useEffect } from "react";

const useRidrectToSignin = () => {
	const { redirectToLogin } = useIsLoggedIn();
	return useEffect(() => {
		redirectToLogin();
	}, []);
};

export default useRidrectToSignin;
