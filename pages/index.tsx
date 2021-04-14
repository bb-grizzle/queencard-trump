import PageContainer from "../Layout/PageLayout";
import ContainerLayout from "../Layout/ContainerLayout";

const index = () => {
	return (
		<PageContainer>
			<ContainerLayout>
				test
				<ul>
					<li>test1</li>
					<li>test2</li>
					<li>test3</li>
				</ul>
			</ContainerLayout>
		</PageContainer>
	);
};

export default index;
