import { useIsLoggedIn } from "../../Context/AppProvider";
import Portfolio from "./portfolio";
import Signin from "./signin";

const index = () => {
	const { isLoggedIn } = useIsLoggedIn();

	return isLoggedIn ? <Portfolio /> : <Signin />;
};

export default index;
