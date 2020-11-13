import styled, { css } from "styled-components";
import media from "../../Styles/media";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminFormTitle from "./AdminFormTitle";
import { useAdminAction } from "../../Context/AdminProvider";
import useInput from "../../Hook/useInput";
import InputDefault from "../Input/InputDefault";
import Title, { TitleType } from "../Text/Title";
import TextArea from "../Input/TextArea";
import FormDefault from "../Input/FormDefault";
import EditorDefault from "../Editor/EditorDefault";
import useEditor from "../../Hook/useEditor";
import useInputFile from "../../Hook/useInputFile";
import InputFile from "../Input/inputFile";

const Wrapper = styled.div<{ active: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: ${(props) => props.theme.size.full_height};
	z-index: ${(props) => props.theme.zIndex.adminForm};
	background-color: ${(props) => props.theme.color.white};
	padding-top: ${(props) => props.theme.size.header.pc};
	transition: ${(props) => props.theme.transition.default};
	overflow: scroll;
	padding-bottom: ${(props) => props.theme.size.header.pc};

	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.header.mobile};
	}

	${(props) =>
		props.active
			? css`
					opacity: 1;
					transform: translateY(0);
					${(props) => props.theme.event.active};
			  `
			: css`
					opacity: 0;
					transform: translateY(32px);
					${(props) => props.theme.event.disable}
			  `};
`;

const Container = styled(ContainerLayout)`
	height: auto;
`;

const AdminForm = () => {
	const { adminAction } = useAdminAction();
	const testInput = useInput("");
	const textareaInput = useInput("");
	const editorInput = useEditor(undefined);
	const fileInput = useInputFile();

	const handleSubmit = () => {
		console.log("handleSubmit");
		console.log(testInput);
		console.log(textareaInput);
		console.log(editorInput);
		console.log(fileInput);
	};

	return (
		<Wrapper active={adminAction !== null}>
			<Container>
				<AdminFormTitle title={"타이틀"} />

				<FormDefault onSubmit={handleSubmit} icon={"check"}>
					<Title title="input default" type={TitleType.SM} />
					<InputDefault {...testInput} placeholder="text" />
					<InputDefault {...testInput} placeholder="number" type="number" />
					<InputDefault {...testInput} placeholder="email" type="email" />

					<Title title="text area" type={TitleType.SM} />
					<TextArea {...textareaInput} placeholder="textarea" />
					<TextArea {...textareaInput} placeholder="textarea" />
					<TextArea {...textareaInput} placeholder="textarea" />
					<TextArea {...textareaInput} placeholder="textarea" />

					<Title title="editor" type={TitleType.SM} />
					<EditorDefault {...editorInput} />

					<Title title="file" type={TitleType.SM} />
					<InputFile {...fileInput} />
				</FormDefault>
			</Container>
		</Wrapper>
	);
};

export default AdminForm;
