import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import AdminForm from "../../Component/Admin/AdminForm";
import { useRef, useEffect } from "react";
import useVideoInput from "../../Hook/useVideoInput";
import useTutor from "../../Hook/useTutor";

const tutor = () => {
	useRidrectToSignin();
	const { data, update } = useTutor();
	const videoInput = useVideoInput();
	const formRef = useRef<HTMLFormElement>();

	useEffect(() => {
		if (data && data.url) {
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
		console.log({ youtubeId: videoInput.value, url: videoInput.url.value });
		update({ youtubeId: videoInput.value, url: videoInput.url.value });
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
