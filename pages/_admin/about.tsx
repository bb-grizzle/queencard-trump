import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import useContents from "../../Hook/useContents";
import InputContents from "../../Component/Input/InputContents";
import useInput from "../../Hook/useInput";
import AdminForm from "../../Component/Admin/AdminForm";
import { useRef, useEffect, useState } from "react";
import { useAdminAction } from "../../Context/AdminProvider";
import useAbout from "../../Hook/useAbout";
import { useLoading } from "../../Context/AppProvider";

const about = () => {
	useRidrectToSignin();
	const titleInput = useInput("");
	const subTitleInput = useInput("");
	const contentsInput = useContents({ isText: true });
	const { setLoading } = useLoading();
	const { data, update } = useAbout();
	const [form, setForm] = useState();

	useEffect(() => {
		if (!!data) {
			titleInput.setValue(data.title);
			subTitleInput.setValue(data.subTitle);
			contentsInput.setValue(data.contents);
		}
	}, [data]);

	useEffect(() => {
		const title = titleInput.value;
		const subTitle = subTitleInput.value;
		setForm({
			title,
			subTitle,
			contents: null
		});
	}, [titleInput.value, subTitleInput.value]);

	const formRef = useRef();

	const formContents = [
		{
			title: "기본 정보",
			inputs: [
				{ ...titleInput, placeholder: "제목" },
				{ ...subTitleInput, placeholder: "부 제목" }
			]
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
