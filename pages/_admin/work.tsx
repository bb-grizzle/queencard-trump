import AdminProvider, { useisAdminLogin } from "../../Context/AdminProvider";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const work = () => {
	const { push } = useRouter();
	const isLogin = useisAdminLogin();
	useEffect(() => {
		if (!isLogin) {
			push("/_admin");
		}
	}, [isLogin]);

	return (
		<>
			<AdminProvider>admin work</AdminProvider>
		</>
	);
};

export default work;
