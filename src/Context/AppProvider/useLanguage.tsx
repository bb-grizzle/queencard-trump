import { useContext } from "react";
import { AppContext, LanguageEnum } from ".";

export const useLanguage = () => {
	const { language, setLanguage } = useContext(AppContext);

	const changeLanguage = (type: LanguageEnum) => {
		setLanguage(type);
	};

	return { language, changeLanguage };
};
