import Title from "@/components/shared/Title";
import AdminSignin from "@/components/shared/admin/form/AdminSignin";
import useRedirect from "@/hook/useRedirect";
import Container from "@/layout/ContainerLayout";
import PageLayout from "@/layout/PageLayout";
import AdminProvider from "@/provider/AdminProvider";
import useLogin from "@/provider/AppProvider/useLogin";
import { ROUTER } from "@/router";

const TITLE = ""

const Page = () => {
  const { isLoggedIn } = useLogin()
  useRedirect({
    condition: isLoggedIn === true,
    path: ROUTER.ADMIN_ARTICLE
  })

  return (
    <AdminProvider>
      <PageLayout title={`admin ${TITLE}`} loading={false} error={false} errorMessage={""}>
        <Container>
          <Title text={`admin ${TITLE}`} />
          <AdminSignin />
        </Container>
      </PageLayout>
    </AdminProvider>
  );
}

export default Page;