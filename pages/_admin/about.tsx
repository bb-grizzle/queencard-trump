import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import useContents from "../../Hook/useContents";
import InputContents from "../../Component/Input/InputContents";

const about = () => {
	useRidrectToSignin();
	const contentsInput = useContents({ isText: true });
	return (
		<PageContainer>
			<ContainerLayout>
				<AdminTitleSection title={"회사 소개"} />

				<InputContents {...contentsInput} />
			</ContainerLayout>
		</PageContainer>
	);
};

export default about;
