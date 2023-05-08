import { AdminActionEnum, AdminContextType } from "@/types/provider/adminProvider";
import { ReactNode, createContext, useState } from "react";
import useAdminInit from "./useAdminInit";

interface AdminProviderProps {
	children: ReactNode;
}

export const AdminContext = createContext({} as AdminContextType);

const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
	const actionState = useState<AdminActionEnum>(AdminActionEnum.NONE);
	const formState = useState<object>({});

	const value: AdminContextType = {
		actionState,
		formState,
	};

	useAdminInit(value);

	return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default AdminProvider;
