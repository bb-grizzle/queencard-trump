import useInputDefault from "@/hook/input/useInputDefault";
import styled from "styled-components";
import InputDefault from "../../Input";
import useForm from "@/hook/input/useForm";
import useAdminForm from "@/provider/AdminProvider/useAdminForm";
import { useEffect } from "react";
import useInputEditor from "@/hook/input/useInputEditor";
import useInputImage from "@/hook/input/useInputImage";
import InputImage from "../../Input/InputImage";
import InputEditor from "../../Input/InputEditor";

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const AdminArticleInputs = () => {
	// FIELD
	const titleHook = useInputDefault({
		layout: { label: "title" },
		option: {
			name: "title",
			placeholder: "title",
			required: true,
		},
	});

	const textHook = useInputEditor({
		layout: { label: "text" },
		option: {
			name: "text",
			placeholder: "text",
		},
	});

	const imageHook = useInputImage({
		layout: {
			label: "thumbnail",
		},
		option: {
			name: "thumbnail",
		},
	});

	const { validation, form, changeForm } = useForm({ hooks: [titleHook, textHook] });
	const { changeForm: changeAdminForm, changeFormValidation, currentData } = useAdminForm();

	useEffect(() => {
		changeAdminForm(form);
	}, [form]);

	useEffect(() => {
		if (currentData) {
			console.log(currentData);
			changeForm(currentData);
		}
	}, [currentData]);

	useEffect(() => {
		changeFormValidation(validation);
	}, [validation]);

	return (
		<InputWrapper>
			<InputDefault {...titleHook} />
			<InputEditor {...textHook} />
			<InputImage {...imageHook} />
		</InputWrapper>
	);
};

export default AdminArticleInputs;
