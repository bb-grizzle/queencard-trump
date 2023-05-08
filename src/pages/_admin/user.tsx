import ContainerLayout from "@/layout/ContainerLayout";
import AdminTitle from "@/components/shared/admin/AdminTitle";
import PageLayout from "@/layout/PageLayout";
import styled from "styled-components";
import AdminLists from "@/components/shared/admin/AdminLists";
import AdminProvider from "@/provider/AdminProvider";
import AdminPopup from "@/components/shared/admin/AdminPopup";
import { getUsersQUery } from "@/lib/apollo/users/getUsers";
import { gql, useMutation, useQuery } from "@apollo/client";
import { createUserMutaion } from "@/lib/apollo/users/createUser";

const Container = styled(ContainerLayout)``;

const Page = () => {
	const { data, loading } = useQuery(getUsersQUery);
	const [createMutation] = useMutation(createUserMutaion, {
		update(
			cache,
			{
				data: {
					createUser: { user },
				},
			}
		) {
			cache.modify({
				fields: {
					getUsers(prev = []) {
						const newUser = cache.writeFragment({
							data: { __typename: "User", ...user },
							fragment: gql`
								fragment NewUser on User {
									id
									email
									createdAt
									updatedAt
								}
							`,
						});
						return [newUser, ...prev];
					},
				},
			});
		},
	});

	return (
		<AdminProvider>
			<PageLayout title="admin user" loading={loading} error={!data?.getUsers} errorMessage={data?.getUsers === null ? "로그인이 필요합니다. " : ""}>
				<Container>
					<AdminTitle text="admin user" />

					{/* list */}
					{<AdminLists data={data?.getUsers} titleKey={"email"} fields={["id", "createdAt", "updatedAt"]} />}

					{/* popup */}
					<AdminPopup title="user" createMutation={createMutation} createMutationName="createUser" />
				</Container>
			</PageLayout>
		</AdminProvider>
	);
};

export default Page;
