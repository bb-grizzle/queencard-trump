import { UseFormType } from "@/types/input/form";
import { useEffect, useState } from "react";

const useForm: UseFormType = ({ hooks }) => {
	const [form, setForm] = useState({});
	const [validation, setValidation] = useState(false);

	// STATE
	// : set value
	useEffect(() => {
		const form = hooks.reduce((prev, currnet) => {
			if ("startOption" in currnet) {
				prev = { ...prev, [currnet.startOption?.name ?? "start"]: currnet.startValue, [currnet.endOption?.name ?? "end"]: currnet.endValue };
			} else {
				prev = { ...prev, [currnet.option?.name ?? currnet.layout.label]: currnet.value };
			}

			return prev;
		}, {});
		setForm(form);
	}, [...hooks.map((el) => el.value)]);

	// : check validation
	useEffect(
		() => {
			const check = hooks.some((hook) => hook.isError);
			setValidation(!check);
		},
		hooks.map((hook) => hook.isError)
	);

	const checkForm = () => {
		hooks.forEach((hook) => {
			hook.checkValidation();
		});
	};

	const changeForm = (currentForm: { [key: string]: any }) => {
		Object.keys(currentForm).map((key) => {
			const newValue = currentForm[key];
			hooks.find((el) => el.option?.name === key)?.changeValue(newValue);
		});
	};

	return { form, validation, checkForm, changeForm };
};

export default useForm;
