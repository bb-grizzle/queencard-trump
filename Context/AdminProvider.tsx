import { useState, createContext, useEffect, useContext } from "react";

export const AdminContext = createContext({
	isLogin: false,
	setIsLogin: null,
	action: null,
	setAction: null
});

export enum ActionType {
	NULL,
	ADD,
	EDIT
}

const AdminProvider: React.FC = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const [action, setAction] = useState(ActionType.NULL);

	const checkUserLogin = async () => {
		const token = Boolean(localStorage.getItem("token"));
		setIsLogin(token);
	};

	useEffect(() => {
		checkUserLogin();
	}, []);

	return <AdminContext.Provider value={{ isLogin, setIsLogin, action, setAction }}>{children}</AdminContext.Provider>;
};

export const useisAdminLogin = () => {
	const { isLogin } = useContext(AdminContext);
	return isLogin;
};

export const adminLogin = () => {
	const { setIsLogin } = useContext(AdminContext);
	return setIsLogin;
};

export const useAction = () => {
	const { action } = useContext(AdminContext);
	return action;
};

export const setAction = () => {
	const { setAction } = useContext(AdminContext);
	return setAction;
};

export default AdminProvider;
