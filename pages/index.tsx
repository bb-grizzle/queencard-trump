import PageContainer from "../Layout/PageLayout";
import useInput from "../Hook/useInput";
import InputDefault from "../Component/Input/InputDefault";
import ContainerLayout from "../Layout/ContainerLayout";
import Title from "../Component/Text/Title";
import useEditor from "../Hook/useEditor";
import EditorDefault from "../Component/Editor/EditorDefault";

const index = () => {
	const inputText = useInput(null, { placeholder: "input text", label: "input text" });
	const inputDate = useInput(null, { placeholder: "input number", label: "input number", type: "number" });
	const inputNumber = useInput(null, { placeholder: "input date", type: "date", label: "input date" });

	const editor = useEditor();

	return (
		<PageContainer>
			<ContainerLayout>
				<Title title={"input"} />
				<InputDefault {...inputText} />
				<InputDefault {...inputNumber} />
				<InputDefault {...inputDate} />
			</ContainerLayout>

			<ContainerLayout>
				<Title title={"editore"} />
				<EditorDefault {...editor} />
			</ContainerLayout>
		</PageContainer>
	);
};

export default index;
