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
	const { changeForm, changeFormValidation } = useAdminForm();
	const emailHook = useInputDefault({
		layout: { label: "email" },
		option: {
			name: "email",
			placeholder: "email",
			required: true,
			type: "email",
		},
	});
	const pwHook = useInputDefault({
		layout: { label: "pw" },
		formating: FormatType.TEST,
		option: {
			name: "password",
			placeholder: "password",
			required: true,
			type: "password",
		},
	});

	const { validation, form } = useForm({ hooks: [emailHook, pwHook] });

	useEffect(() => {
		changeForm(form);
	}, [form]);

	useEffect(() => {
		changeFormValidation(validation);
	}, [validation]);

	return (
		<InputWrapper>
			<InputDefault {...emailHook} />
			<InputDefault {...pwHook} />
		</InputWrapper>
	);
};

export default AdminUserInputs;
