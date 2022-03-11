import { useContext } from "react";
import { AdminContext } from ".";

export const useAdminAction = () => {
	const { adminAction, setAdminAction } = useContext(AdminContext);
	return { adminAction, setAdminAction };
};
