import EditorView from "@/components/shared/EditorView";
import InputDefault from "@/components/shared/Input";
import InputDuration from "@/components/shared/Input/InputDuration";
import InputEditor from "@/components/shared/Input/InputEditor";
import InputImage from "@/components/shared/Input/InputImage";
import useInputDefault from "@/hook/input/useInputDefault";
import useInputDuration from "@/hook/input/useInputDuration";
import useInputEditor from "@/hook/input/useInputEditor";
import useInputImage, { SizeUnit } from "@/hook/input/useInputImage";
import IntroLayout from "@/layout/IntroLayout";
import IntroSectionLayout from "@/layout/IntroSectionLayout";
import { IconName } from "@/types/icon";
import { FormatType } from "@/util/formating";

const ComponentInput = () => {
	// FIELD
	const inputHook = useInputDefault({
		layout: { label: "input default" },
		formating: FormatType.TEST,
		option: {
			placeholder: "input default",
			value: "init value",
		},
		button: {
			iconName: IconName.ADD,
			onClick: () => console.log("button clicked"),
		},
	});
	const inputImageHook = useInputImage({
		layout: { label: "input default" },
		option: {
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
		startOption: {
			value: "2022-02-02",
		},
	});

	const inputEditorHook = useInputEditor({
		layout: { label: "input editor" },
	});

	// RENDER
	return (
		<IntroLayout title="input">
			{/* default */}
			<IntroSectionLayout title="default">
				<InputDefault {...inputHook} />
			</IntroSectionLayout>
			{/* image */}
			<IntroSectionLayout title="image">
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
		</IntroLayout>
	);
};

export default ComponentInput;
