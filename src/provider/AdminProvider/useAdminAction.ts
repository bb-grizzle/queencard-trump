import { useContext } from "react";
import { AdminContext } from ".";
import { AdminActionEnum } from "@/types/provider/adminProvider";

const useAdminAction = () => {
	const { actionState } = useContext(AdminContext);
	const [action, setAction] = actionState;

	const actionToNone = () => setAction(AdminActionEnum.NONE);
	const actionToEdit = () => setAction(AdminActionEnum.EDIT);
	const actionToAdd = () => setAction(AdminActionEnum.ADD);

	return { action, actionToNone, actionToEdit, actionToAdd };
};

export default useAdminAction;
