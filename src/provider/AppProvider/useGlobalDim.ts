import { useContext } from "react";
import { AppContext } from ".";

const useGlobalDim = () => {
	const { globalDimOnClick, globalDimState } = useContext(AppContext);
	const [isActive, setIsActive] = globalDimState;

	const activeDim = () => setIsActive(true);
	const hideDim = () => setIsActive(false);

	const setDimClick = (fn: () => void) => {
		globalDimOnClick.current = fn;
	};

	return { setDimClick, isActive, activeDim, hideDim, onDimClick: globalDimOnClick.current };
};

export default useGlobalDim;
