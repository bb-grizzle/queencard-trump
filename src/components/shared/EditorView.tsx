import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";
import styled from "styled-components";

interface EditorViewProps {
	value: string;
}

const Wrapper = styled.div`
	.quill {
		height: 320px;
		display: flex;
		flex-direction: column;
	}
	.ql-toolbar {
		display: none;
	}
	.ql-container {
		overflow: scroll;
		height: auto;
		flex-grow: 1;
		border: none;
	}
`;

const ReactQuill = dynamic<ReactQuillProps>(async () => import("react-quill"), {
	ssr: false,
});

const EditorView: React.FC<EditorViewProps> = ({ value }) => {
	return (
		<Wrapper>
			<ReactQuill value={value} readOnly={true} modules={{ toolbar: undefined }} />
		</Wrapper>
	);
};

export default EditorView;
