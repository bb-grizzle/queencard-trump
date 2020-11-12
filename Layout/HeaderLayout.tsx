import Header from "../Component/Header";
import MobileMenu from "../Component/MobileMenu";
import FloatingBtn from "../Component/FloatingBtn";
import { useRouter } from "next/router";

const HeaderLayout = ({ children }) => {
	const router = useRouter();

	return (
		<>
			<Header />
			<MobileMenu />
			{router.pathname !== "/contact" && <FloatingBtn />}

			{children}
		</>
	);
};

export default HeaderLayout;
