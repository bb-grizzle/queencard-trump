import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import useContents from "../../Hook/useContents";
import useInput from "../../Hook/useInput";
import AdminForm from "../../Component/Admin/AdminForm";
import { useRef, useEffect, useState } from "react";
import useAbout from "../../Hook/useAbout";
import { useLoading } from "../../Context/AppProvider";

const about = () => {
	useRidrectToSignin();
	const titleInput = useInput("");
	const contentsInput = useContents({ isText: true });
	const { setLoading } = useLoading();
	const { data, update } = useAbout();
	const [form, setForm] = useState({});

	useEffect(() => {
		if (!!data) {
			setLoading(false);
			titleInput.setValue(data.title);
			contentsInput.setValue(data.contents);
		}
	}, [data]);

	useEffect(() => {
		const title = titleInput.value;
		setForm({
			title,
			contents: null
		});
	}, [titleInput.value]);

	const formRef = useRef();

	const formContents = [
		{
			title: "제목",
			inputs: [{ ...titleInput, placeholder: "제목", type: "textarea" }]
		},
		{
			title: "컨텐츠 정보",
			inputs: [
				{
					...contentsInput,
					placeholder: "컨텐츠",
					type: "contents"
				}
			]
		}
	];

	const handleSubmit = async () => {
		setLoading(true);
		await update(form, contentsInput);
		setLoading(false);
		contentsInput.title.init();
		contentsInput.text.init();
		contentsInput.image.init();
	};

	return (
		<PageContainer>
			<ContainerLayout>
				<AdminTitleSection title={"회사 소개"} />
				<AdminForm title={"회사 소개"} contents={formContents} onSubmit={handleSubmit} formRef={formRef} cancelable={false} />
			</ContainerLayout>
		</PageContainer>
	);
};

export default about;
