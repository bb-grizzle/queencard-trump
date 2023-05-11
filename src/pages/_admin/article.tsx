import ContainerLayout from "@/layout/ContainerLayout";
import AdminTitle from "@/components/shared/admin/AdminTitle";
import PageLayout from "@/layout/PageLayout";
import styled from "styled-components";
import AdminLists from "@/components/shared/admin/AdminLists";
import AdminProvider from "@/provider/AdminProvider";
import AdminPopup from "@/components/shared/admin/AdminPopup";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { createUserMutaion } from "@/lib/apollo/users/createUser";
import { updateUserMutation } from "@/lib/apollo/users/updateUser";
import { ROUTER } from "@/router";
import { deleteUserMutation } from "@/lib/apollo/users/deleteUser";
import { getArticlesQuery } from "@/lib/apollo/articles/getArticles";
import { getArticleQuery } from "@/lib/apollo/articles/getArticle";
import useLogin from "@/provider/AppProvider/useLogin";
import useRedirect from "@/hook/useRedirect";

const Container = styled(ContainerLayout)``;

const TITLE = "article";
const QUERY_NAME = "getArticles";

const Page = () => {
	const { isLoggedIn } = useLogin()

	useRedirect({
		condition: isLoggedIn === false,
		path: ROUTER.ADMIN
	})

	const { data, loading } = useQuery(getArticlesQuery);
	const [getDetailQuery] = useLazyQuery(getArticleQuery);
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
	const [updateMutation] = useMutation(updateUserMutation, {
		update(
			cache,
			{
				data: {
					updateUser: { user },
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
						return prev.map((el: any) => (el.id === user.id ? newUser : el));
					},
				},
			});
		},
	});
	const [deleteMutation] = useMutation(deleteUserMutation, {
		update(
			cache,
			{
				data: {
					deleteUser: { user },
				},
			}
		) {
			const normalizedId = cache.identify({ id: user.id, __typename: "User" });
			cache.evict({ id: normalizedId });
			cache.gc();
		},
	});

	return (
		<AdminProvider>
			<PageLayout title={`admin ${TITLE}`} loading={loading} error={!data?.[QUERY_NAME]} errorMessage={data?.[QUERY_NAME].error}>
				<Container>
					<AdminTitle text={`admin ${TITLE}`} />

					{/* list */}
					<AdminLists
						path={ROUTER.ARTICLE}
						data={data?.[QUERY_NAME]}
						titleKey={"title"}
						fields={["id", "text", "createdAt", "updatedAt"]}
						deleteMutation={deleteMutation}
						deleteMutationName={"deleteUser"}
					/>

					{/* popup */}
					<AdminPopup
						title={TITLE}
						createMutation={createMutation}
						createMutationName="createUser"
						updateMutation={updateMutation}
						updateMutationName="updateUser"
						getDetailQuery={getDetailQuery}
						getDetailQueryName="getArticle"
					/>
				</Container>
			</PageLayout>
		</AdminProvider>
	);
};

export default Page;
