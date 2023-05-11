import { AppContextProps } from "@/types/provider/appProvider";
import { setFullHeight } from "@/util/setFullHeight";
import { useEffect } from "react";

const useInitAppContext = (ctx: AppContextProps) => {
	// STATE
	useEffect(() => {
		window.addEventListener("resize", setFullHeight);
		return () => {
			window.removeEventListener("resize", setFullHeight);
		};
	}, []);

	return;
};

export default useInitAppContext;
