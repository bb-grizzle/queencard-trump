import InputLayout from "@/layout/InputLayout";
import { UseInputEditorResultType } from "@/types/input/editor";
import dynamic from "next/dynamic";


interface InputEditorJsProps extends UseInputEditorResultType { }

const Editor = dynamic(() => import("../../editorjs/Editorjs"), { ssr: false })

const InputEditorJs: React.FC<InputEditorJsProps> = ({ layout, ...rest }) => {

	return (
		<InputLayout {...layout}>
			<Editor {...rest} />
		</InputLayout>
	);
}

export default InputEditorJs;