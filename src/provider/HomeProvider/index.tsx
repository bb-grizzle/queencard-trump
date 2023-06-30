import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface HomeProviderProps {
	children: ReactNode;
}

export type HomeContextProps = {
	currentStepState: [StepEnum, Dispatch<SetStateAction<StepEnum>>]
};

export enum StepEnum {
	READY = "ready",
	LOADING = "loading",
	DONE = "done"
}

export const HomeContext = createContext({} as HomeContextProps);

const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
	const currentStepState = useState<StepEnum>(StepEnum.READY)

	const value: HomeContextProps = {
		currentStepState
	};

	return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
