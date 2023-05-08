import { useContext } from "react";
import { AdminContext } from ".";

const useAdminForm = () => {
	const { formState, formValidationState, currentDataState, currentIdState } = useContext(AdminContext);
	const [form, setForm] = formState;
	const [formValidation, setFormValidation] = formValidationState;
	const [currentData, setCurrentData] = currentDataState;
	const [currentId, setCurrentId] = currentIdState;

	const changeForm = (form: Object) => {
		setForm(form);
	};

	const changeFormValidation = (val: boolean) => {
		setFormValidation(val);
	};

	const changeCurrentData = (obj: any) => {
		setCurrentData(obj);
	};

	const changeCurrentId = (id: number) => {
		setCurrentId(id);
	};

	const clearCurrentData = () => {
		setCurrentId(null);
	};

	return { changeForm, form, changeFormValidation, formValidation, changeCurrentId, changeCurrentData, currentData, clearCurrentData, currentId };
};

export default useAdminForm;
