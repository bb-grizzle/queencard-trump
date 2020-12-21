import styled from "styled-components";
import dynamic from "next/dynamic";
import InputLayout from "../Input/InputLayout";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "./TuiEditorWrapper";
import { forwardRef, useRef } from "react";
import BtnIcon from "../Btn/BtnIcon";

interface EditorPropsWithHandlers extends EditorProps {
	onChange?(value: string): void;
}

interface EditorDefaultProps {
	onChange: any;
	value?: string;
	placeholder?: string;
	label?: string;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("./TuiEditorWrapper"), { ssr: false });
const EditorWithForwardedRef = forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props, ref) => <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />);

const Wrapper = styled.div`
	b {
		font-style: bold;
		font-weight: 700;
	}
`;

const EditorDefault: React.FC<EditorDefaultProps> = ({ onChange, value, placeholder, label }) => {
	// { label, onChange, value = "내용을 작성하세요! 😆" }
	const editorRef = useRef<EditorType>();

	const handleChange = () => {
		if (!editorRef.current) {
			return;
		}
		const instance = editorRef.current.getInstance();
		onChange(instance.getMarkdown());
	};

	return (
		<InputLayout label={label}>
			<Wrapper>
				<EditorWithForwardedRef
					// {...props}
					initialValue={value ? value : null}
					placeholder={placeholder ? placeholder : "내용을 작성하세요! 😆"}
					previewStyle={"vertical"}
					height={"600px"}
					initialEditType={"wysiwyg"}
					useCommandShortcut={true}
					ref={editorRef}
					onChange={handleChange}
				/>
			</Wrapper>
			<BtnIcon
				icon={"check"}
				onClick={() => {
					console.log("test");
				}}
			/>
		</InputLayout>
	);
};

export default EditorDefault;
