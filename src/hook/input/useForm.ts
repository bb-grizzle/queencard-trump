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

	const getForm = () => {
		// 01. reformat input
		const reducedHooks = hooks.reduce<any[]>((prev, current) => {
			if ("startOption" in current) {
				const start = {
					...current,
					option: current.startOption,
					value: current.startValue,
				};
				const end = {
					...current,
					option: current.endOption,
					value: current.endValue,
				};
				prev = [...prev, start, end];
			} else {
				prev = [...prev, current];
			}

			return prev;
		}, []);

		// 02. get name, value
		let form: any = {};
		reducedHooks.forEach((el) => {
			form[el.option.name ?? el.layout.label] = el.value;
		});

		setForm(form);
	};

	return { form, validation, checkForm, getForm };
};

export default useForm;
