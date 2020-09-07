import { useState, createContext, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { CHECK_TOKEN } from "../Queries/adminQueries";

export const AdminContext = createContext({
	isLogin: false,
	setIsLogin: null
});

const AdminProvider: React.FC = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	// const checkTokenQuery = useQuery(CHECK_TOKEN);

	const checkUserLogin = async () => {
		console.log("checkUserLogin");
		const token = Boolean(localStorage.getItem("token"));
		setIsLogin(token);
	};

	useEffect(() => {
		checkUserLogin();
	}, []);

	return <AdminContext.Provider value={{ isLogin, setIsLogin }}>{children}</AdminContext.Provider>;
};

export const useisAdminLogin = () => {
	const { isLogin } = useContext(AdminContext);
	return isLogin;
};

export const adminLogin = () => {
	const { setIsLogin } = useContext(AdminContext);
	return setIsLogin;
};

export default AdminProvider;
