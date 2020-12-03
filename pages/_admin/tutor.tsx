import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import AdminForm from "../../Component/Admin/AdminForm";
import { useRef, useEffect } from "react";
import useVideoInput from "../../Hook/useVideoInput";
import useTutor from "../../Hook/useTutor";
import { useLoading } from "../../Context/AppProvider";
import { formCheck } from "../../util/formCheck";

const tutor = () => {
	useRidrectToSignin();
	const { data, update } = useTutor();
	const videoInput = useVideoInput();
	const formRef = useRef<HTMLFormElement>();
	const { setLoading } = useLoading();

	useEffect(() => {
		if (data && data.url) {
			setLoading(false);
			videoInput.setInit(data.url);
		}
	}, [data]);

	const formContents = [
		{
			title: "청년강사 인터뷰",
			inputs: [{ ...videoInput, type: "video" }]
		}
	];

	const handleSubmit = async () => {
		if (!videoInput.url.value) {
			formCheck();
			return;
		}

		try {
			setLoading(true);
			await update({ youtubeId: videoInput.value, url: videoInput.url.value });
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<PageContainer>
			<ContainerLayout>
				<AdminTitleSection title="강사 소개" />
				<AdminForm title={"강사 소개"} contents={formContents} onSubmit={handleSubmit} formRef={formRef} cancelable={false} />
			</ContainerLayout>
		</PageContainer>
	);
};

export default tutor;
