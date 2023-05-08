import { useEffect } from "react";
import { AdminActionEnum, AdminContextType } from "@/types/provider/adminProvider";
import { activeScroll, preventScroll } from "@/util/scroll";

const useAdminInit = (ctx: AdminContextType) => {
	const { actionState } = ctx;
	const [action] = actionState;

	useEffect(() => {
		if (action !== AdminActionEnum.NONE) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [action]);

	return {};
};

export default useAdminInit;
