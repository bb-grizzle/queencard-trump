import PageContainer from "../../Layout/PageLayout";
import { useIsLoggedIn } from "../../Context/AppProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
	const { isLoggedIn } = useIsLoggedIn();
	const { push } = useRouter();

	useEffect(() => {
		if (isLoggedIn) {
			push("/_admin/portfolio");
		} else {
			push("/_admin/signin");
		}
	}, [isLoggedIn]);

	return <PageContainer>index</PageContainer>;
};

export default index;
