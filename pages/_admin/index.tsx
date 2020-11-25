import { useIsLoggedIn } from "../../Context/AppProvider";
import Home from "./home";
import Signin from "./signin";
import { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
	const { isLoggedIn } = useIsLoggedIn();
	const { push } = useRouter();
	useEffect(() => {
		if (isLoggedIn) {
			push("/_admin/portfolio");
		}
	}, [isLoggedIn]);

	return isLoggedIn ? <Home /> : <Signin />;
};

export default index;
