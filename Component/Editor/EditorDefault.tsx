import styled from "styled-components";
import dynamic from "next/dynamic";
import InputLayout from "../Input/InputLayout";
interface EditorDefaultProps {
	onChange: any;
	value: string;
	placeholder?: string;
	label?: string;
}
const QuillNoSSRWRapper = dynamic(import("react-quill"), {
	ssr: false,
	loading: () => <span>loading...</span>
});

const Wrapper = styled.div`
	> .quill .ql-editor {
		p {
			font-size: ${(props) => `${props.theme.text.paragraph.md}px`};
		}
		h1 {
			font-size: ${(props) => `${props.theme.text.title.lg}px`};
		}
		h2 {
			font-size: ${(props) => `${props.theme.text.title.md}px`};
		}
		h3 {
			font-size: ${(props) => `${props.theme.text.title.sm}px`};
		}
	}
`;

const EditorDefault: React.FC<EditorDefaultProps> = ({ label, onChange, value = "내용을 작성하세요! 😆" }) => {
	return (
		<InputLayout label={label}>
			<Wrapper>
				<QuillNoSSRWRapper value={value} onChange={onChange} placeholder={"상세 설명"} />
			</Wrapper>
		</InputLayout>
	);
};

export default EditorDefault;
