import useInputDefault from "@/hook/input/useInputDefault";
import useInputDuration from "@/hook/input/useInputDuration";
import useInputEditor from "@/hook/input/useInputEditor";
import useInputImage from "@/hook/input/useInputImage";
import { IconName } from "@/types/icon";
import { SizeUnit } from "@/types/input/image";
import { FormatType } from "@/util/formating";
import styled from "styled-components";
import InputDefault from "../Input";
import InputImage from "../Input/InputImage";
import InputDuration from "../Input/InputDuration";
import InputEditor from "../Input/InputEditor";
import useForm from "@/hook/input/useForm";
import useAdminForm from "@/provider/AdminProvider/useAdminForm";
import { useEffect } from "react";

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const AdminUserInputs = () => {
	// FIELD
	const emailHook = useInputDefault({
		layout: { label: "email" },
		option: {
			name: "email",
			placeholder: "email",
			required: true,
			type: "email",
		},
	});

	const nameHook = useInputDefault({
		layout: { label: "name" },
		option: {
			name: "name",
			placeholder: "name",
		},
	});

	const { validation, form, changeForm } = useForm({ hooks: [emailHook, nameHook] });
	const { changeForm: changeAdminForm, changeFormValidation, currentData } = useAdminForm();

	useEffect(() => {
		changeAdminForm(form);
	}, [form]);

	useEffect(() => {
		if (currentData) {
			changeForm(currentData);
		}
	}, [currentData]);

	useEffect(() => {
		changeFormValidation(validation);
	}, [validation]);

	return (
		<InputWrapper>
			<InputDefault {...emailHook} />
			<InputDefault {...nameHook} />
		</InputWrapper>
	);
};

export default AdminUserInputs;
