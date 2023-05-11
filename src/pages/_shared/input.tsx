import Button, { BtnTypeEnum } from "@/components/shared/Button";
import EditorView from "@/components/shared/EditorView";
import InputDefault from "@/components/shared/Input";
import InputDuration from "@/components/shared/Input/InputDuration";
import InputEditor from "@/components/shared/Input/InputEditor";
import InputImage from "@/components/shared/Input/InputImage";
import useForm from "@/hook/input/useForm";
import useInputDefault from "@/hook/input/useInputDefault";
import useInputDuration from "@/hook/input/useInputDuration";
import useInputEditor from "@/hook/input/useInputEditor";
import useInputImage from "@/hook/input/useInputImage";
import IntroLayout from "@/layout/IntroLayout";
import IntroSectionLayout from "@/layout/IntroSectionLayout";
import { IconName } from "@/types/icon";
import { SizeUnit } from "@/types/input/image";
import { FormatType } from "@/util/formating";
import { useEffect } from "react";

const IntroInput = () => {
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
		layout: { label: "input image" },
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
	const { validation, form, checkForm } = useForm({ hooks: [inputHook, inputImageHook, inputDurationHook, inputEditorHook] });

	// STATE
	useEffect(() => {
		console.log("✅ validation : ", validation);
	}, [validation]);

	useEffect(() => {
		console.log("✅ form : ", form);
	}, [form]);

	// RENDER
	return (
		<IntroLayout title="input">
			{/* default */}
			<IntroSectionLayout title="default">
				<InputDefault {...inputHook} />
			</IntroSectionLayout>
			{/* images */}
			<IntroSectionLayout title="images">
				<InputImage {...inputImageHook} />
			</IntroSectionLayout>
			{/* duration */}
			<IntroSectionLayout title="duration">
				<InputDuration {...inputDurationHook} />
			</IntroSectionLayout>
			{/* editor */}
			<IntroSectionLayout title="editor">
				<InputEditor {...inputEditorHook} />
				<EditorView value={inputEditorHook.value} />
			</IntroSectionLayout>
			{/* form */}
			<IntroSectionLayout title="form">
				<Button text="check form" onClick={checkForm} btnType={BtnTypeEnum.SOLID} />
			</IntroSectionLayout>
		</IntroLayout>
	);
};

export default IntroInput;
