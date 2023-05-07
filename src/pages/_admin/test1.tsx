import ContainerLayout from "@/layout/ContainerLayout";
import AdminTitle from "@/components/shared/admin/AdminTitle";
import PageLayout from "@/layout/PageLayout";
import styled from "styled-components";
import AdminLists from "@/components/shared/admin/AdminLists";
import { DATA_DUM_ADMIN_LISTS } from "@/data/dummy";
import LoadingLayout from "@/layout/LoadingLayout";

const Container = styled(ContainerLayout)``;

const test1 = () => {
	return (
		<PageLayout title="admin test 1">
			<LoadingLayout loading={true}>
				<Container>
					<AdminTitle text="admin title" />

					{/* list */}
					<AdminLists data={DATA_DUM_ADMIN_LISTS} titleKey={"title"} fields={["author", "createdAt"]} />

					{/* edit popup */}
				</Container>
			</LoadingLayout>
		</PageLayout>
	);
};

export default test1;
