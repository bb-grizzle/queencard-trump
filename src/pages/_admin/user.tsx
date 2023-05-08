import ContainerLayout from "@/layout/ContainerLayout";
import AdminTitle from "@/components/shared/admin/AdminTitle";
import PageLayout from "@/layout/PageLayout";
import styled from "styled-components";
import AdminLists from "@/components/shared/admin/AdminLists";
import AdminProvider from "@/provider/AdminProvider";
import AdminPopup from "@/components/shared/admin/AdminPopup";
import { getUsersQUery } from "@/lib/apollo/users/getUsers";
import { useQuery } from "@apollo/client";

const Container = styled(ContainerLayout)``;

const Page = () => {
	const { data, loading } = useQuery(getUsersQUery);

	return (
		<AdminProvider>
			<PageLayout title="admin user" loading={loading}>
				<Container>
					<AdminTitle text="admin user" />

					{/* list */}
					<AdminLists data={data?.getUsers} titleKey={"email"} fields={["id", "createdAt", "updatedAt"]} />

					{/* popup */}
					<AdminPopup title="user" />
				</Container>
			</PageLayout>
		</AdminProvider>
	);
};

export default Page;
