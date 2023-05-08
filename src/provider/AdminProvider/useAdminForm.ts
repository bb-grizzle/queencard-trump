import { useContext } from "react";
import { AdminContext } from ".";
import useAdminAction from "./useAdminAction";

const useAdminForm = () => {
	const { formState, formValidationState, currentDataState } = useContext(AdminContext);
	const { actionToNone, action } = useAdminAction();
	const [form, setForm] = formState;
	const [formValidation, setFormValidation] = formValidationState;
	const [currentData, setCurrentData] = currentDataState;

	const changeForm = (form: Object) => {
		setForm(form);
	};

	const changeFormValidation = (val: boolean) => {
		setFormValidation(val);
	};

	const changeCurrentData = (data: Object) => {
		setCurrentData(data);
	};

	const clearCurrentData = () => {
		setCurrentData(null);
	};

	return { changeForm, form, changeFormValidation, formValidation, changeCurrentData, currentData, clearCurrentData };
};

export default useAdminForm;
