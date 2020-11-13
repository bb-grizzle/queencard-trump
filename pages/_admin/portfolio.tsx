import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";
import AddBtn from "../../Component/Admin/AddBtn";
import ContainerLayout from "../../Layout/ContainerLayout";
import AdminTitleSection from "../../Component/Admin/AdminTitleSection";
import AdminForm from "../../Component/Admin/AdminForm";
import { useAdminAction } from "../../Context/AdminProvider";

const portfolio = () => {
	useRidrectToSignin();

	return (
		<PageContainer>
			<ContainerLayout>
				<AdminTitleSection title="포트폴리오" />
			</ContainerLayout>

			<AdminForm />

			<AddBtn />
		</PageContainer>
	);
};

export default portfolio;
