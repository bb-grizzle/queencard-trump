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

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const AdminTest1Inputs = () => {
	// FIELD
	const inputHook = useInputDefault({
		layout: { label: "input default" },
		formating: FormatType.TEST,
		option: {
			name: "text",
			placeholder: "input default",
			// value: "init value",
			required: true,
		},
		button: {
			iconName: IconName.ADD,
			onClick: () => console.log("button clicked"),
		},
	});
	const inputImageHook = useInputImage({
		layout: { label: "input default" },
		option: {
			name: "image",
			placeholder: "input default",
		},
		sizeLimit: {
			size: 500,
			unit: SizeUnit.MB,
		},
		dimensionLimit: {
			width: 1921,
			height: 1080,
		},
	});
	const inputDurationHook = useInputDuration({
		layout: {
			label: "input duration",
		},
		option: {},
		startOption: {
			name: "start-date",
			value: "2022-02-02",
		},
		endOption: {
			name: "end-date",
		},
	});
	const inputEditorHook = useInputEditor({
		option: { name: "editor" },
		layout: { label: "input editor" },
	});
	const { validation, form, checkForm, getForm } = useForm({ hooks: [inputHook, inputImageHook, inputDurationHook, inputEditorHook] });

	return (
		<InputWrapper>
			<InputDefault {...inputHook} />
			<InputImage {...inputImageHook} />
			<InputDuration {...inputDurationHook} />
			<InputEditor {...inputEditorHook} />
		</InputWrapper>
	);
};

export default AdminTest1Inputs;
