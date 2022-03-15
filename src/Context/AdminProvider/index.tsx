import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

interface AdminContextProps {
	adminAction: AdminActionType;
	setAdminAction: any;
}

export const AdminContext = createContext({} as AdminContextProps);

export enum AdminActionType {
	ADD = "add",
	EDIT = "edit",
}

const AdminProvider = ({ children }) => {
	const [adminAction, setAdminAction] = useState<AdminActionType>(null);

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === "/_admin/about" || pathname === "/_admin/tutor") {
			setAdminAction(AdminActionType.ADD);
		} else {
			setAdminAction(null);
		}
	}, [pathname]);

	return <AdminContext.Provider value={{ adminAction, setAdminAction }}>{children}</AdminContext.Provider>;
};

export default AdminProvider;