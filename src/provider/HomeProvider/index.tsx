import { createContext, Dispatch, ReactNode, RefObject, SetStateAction, useRef, useState } from "react";

interface HomeProviderProps {
	children: ReactNode;
}

export type HomeContextProps = {
	currentStepState: [StepEnum, Dispatch<SetStateAction<StepEnum>>],
	cardRef: RefObject<HTMLDivElement>
};

export enum StepEnum {
	READY = "ready",
	LOADING = "loading",
	DONE = "done"
}

export const HomeContext = createContext({} as HomeContextProps);

const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
	const currentStepState = useState<StepEnum>(StepEnum.READY)
	const cardRef = useRef<HTMLDivElement>(null)

	const value: HomeContextProps = {
		currentStepState,
		cardRef
	};

	return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
