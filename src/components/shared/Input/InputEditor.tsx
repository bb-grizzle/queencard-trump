import InputLayout from "@/layout/InputLayout";
import { UseInputEditorResultType } from "@/types/input/editor";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

interface InputEditorProps extends UseInputEditorResultType { }

const ReactQuill = dynamic<ReactQuillProps>(async () => import("react-quill"), {
	ssr: false,
});

const EditorWrapper = styled.div`
	.quill {
		height: 320px;
		display: flex;
		flex-direction: column;
	}
	.ql-container {
		overflow: scroll;
		height: auto;
		flex-grow: 1;
	}
`;

const InputEditor: React.FC<InputEditorProps> = ({ layout, option, value, onChange }) => {
	const formats = useMemo(() => ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"], []);
	const modules = useMemo(() => {
		return {
			toolbar: {
				container: [
					[{ "header": [1, 2, false] }],
					["bold", "italic", "underline", "strike", "blockquote"],
					[{ "list": "ordered" }, { "list": "bullet" }, { "indent": "-1" }, { "indent": "+1" }],
					["link", "image"],
					["clean"],
				],
			},
			history: {
				delay: 500,
				maxStack: 100,
				userOnly: true,
			},
		};
	}, []);

	return (
		<InputLayout {...layout}>
			<EditorWrapper>
				<ReactQuill {...option} theme="snow" value={value} onChange={onChange} modules={modules} formats={formats} />
			</EditorWrapper>
		</InputLayout>
	);
};

export default InputEditor;
