import PageContainer from "../Layout/PageLayout";
import ContainerLayout from "../Layout/ContainerLayout";
import Title from "../Component/Text/Title";

const index = () => {
	return (
		<PageContainer>
			<ContainerLayout>
				<Title title={"input"} />
			</ContainerLayout>
		</PageContainer>
	);
};

export default index;
