import { createContext, useState, useContext } from "react";

interface AdminContextProps {
	adminAction: AdminActionType;
	setAdminAction: any;
}

export const AdminContext = createContext({} as AdminContextProps);

export enum AdminActionType {
	ADD = "add",
	EDIT = "edit"
}

const AdminProvider = ({ children }) => {
	const [adminAction, setAdminAction] = useState<AdminActionType>(null);

	return <AdminContext.Provider value={{ adminAction, setAdminAction }}>{children}</AdminContext.Provider>;
};

export const useAdminAction = () => {
	const { adminAction, setAdminAction } = useContext(AdminContext);
	return { adminAction, setAdminAction };
};

export default AdminProvider;
