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
	const formValidationState = useState<boolean>();
	const currentIdState = useState<number | null>(null);
	const currentDataState = useState<{ [key: string]: any } | null>(null);

	const value: AdminContextType = {
		actionState,
		formState,
		formValidationState,
		currentDataState,
		currentIdState,
	};

	useAdminInit(value);

	return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default AdminProvider;
