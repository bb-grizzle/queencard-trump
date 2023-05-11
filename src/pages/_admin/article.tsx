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
import Pagenation from "@/components/shared/pagenation/Pagenation";
import { useRouter } from "next/router";

const ITEM_TAKE = 1;
const PAGENATION_RANGE = 5;

const Container = styled(ContainerLayout)``;

const TITLE = "article";
const QUERY_NAME = "getArticles";

const Page = () => {
	const { query: { page }, push, pathname } = useRouter()
	const { isLoggedIn } = useLogin()

	useRedirect({
		condition: isLoggedIn === false,
		path: ROUTER.ADMIN
	})

	const { data, loading } = useQuery(getArticlesQuery, {
		variables: {
			take: ITEM_TAKE,
			skip: ITEM_TAKE * ((page && Number(page) > 0) ? Number(page) - 1 : 0)
		}
	});
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

	const onPageClick = (page: number) => {
		push(`${pathname}?page=${page}`)
	}
	const onNextClick = () => {
		push(`${pathname}?page=${Number(page) + 1}`)
	}
	const onPrevClick = () => {
		push(`${pathname}?page=${Number(page) - 1}`)
	}

	return (
		<AdminProvider>
			<PageLayout title={`admin ${TITLE}`} loading={loading} error={!data?.[QUERY_NAME]} errorMessage={data?.[QUERY_NAME].error}>
				<Container>
					<AdminTitle text={`admin ${TITLE}`} />

					{/* list */}
					<AdminLists
						path={ROUTER.ARTICLE}
						data={data?.[QUERY_NAME].data}
						titleKey={"title"}
						fields={["id", "text", "createdAt", "updatedAt"]}
						deleteMutation={deleteMutation}
						deleteMutationName={"deleteUser"}
					/>

					<Pagenation
						current={page ? Number(page) : 1}
						total={Math.ceil(data?.[QUERY_NAME].count / ITEM_TAKE)}
						range={PAGENATION_RANGE}
						onPageClick={onPageClick}
						onNextClick={onNextClick}
						onPrevClick={onPrevClick}
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
