import InputDefault from "@/components/shared/Input";
import useInputDefault from "@/hook/input/useInputDefault";
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
		},
		button: {
			iconName: IconName.ADD,
			onClick: () => console.log("button clicked"),
		},
	});

	// RENDER
	return (
		<IntroLayout title="input">
			{/* default */}
			<IntroSectionLayout title="default">
				<InputDefault {...inputHook} />
			</IntroSectionLayout>
			{/* image */}
			<IntroSectionLayout title="file">image</IntroSectionLayout>
			{/* duration */}
			<IntroSectionLayout title="duration">duration</IntroSectionLayout>
			{/* editor */}
			<IntroSectionLayout title="editor">editor</IntroSectionLayout>
		</IntroLayout>
	);
};

export default ComponentInput;
