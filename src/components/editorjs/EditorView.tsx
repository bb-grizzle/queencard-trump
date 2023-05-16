import { useEffect, useRef } from "react";
import styled from "styled-components";
import Editor, { OutputData } from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from "@/lib/editorjs/tools";
interface EditorViewProps {
	data: string | OutputData;
}

const Wrapper = styled.div`
	${props => props.theme.style.editor};
`;

const EditorView: React.FC<EditorViewProps> = ({ data }) => {
	const ref = useRef<Editor>()

	// STATE
	useEffect(() => {
		if (ref.current) return;
		ref.current = new Editor({
			holder: "editorjs-view",
			sanitizer: { p: true },
			minHeight: 0,
			readOnly: true,
			tools: EDITOR_JS_TOOLS,
			// ...option
		});
	}, [])

	useEffect(() => {
		console.log(data)
		if (data && ref.current) {
			if (typeof data === "string") {
				ref.current.render(JSON.parse(data))
			} else {
				ref.current.render(data)
			}
		}
	}, [data])

	return (
		<Wrapper id="editorjs-view" />
	);
};

export default EditorView;
