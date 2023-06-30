import { useContext } from "react";
import { HomeContext, StepEnum } from ".";

const useHomeStep = () => {
	const { currentStepState } = useContext(HomeContext);
	const [currentStep, setCurrentStep] = currentStepState;

	const changeStep = (step: StepEnum) => {
		setCurrentStep(step);
	};

	return { currentStep, changeStep };
};

export default useHomeStep;
