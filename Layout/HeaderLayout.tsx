import Header from "../Component/Header";
import MobileMenu from "../Component/MobileMenu";
import FloatingBtn from "../Component/FloatingBtn";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const HeaderLayout = ({ children }) => {
	const router = useRouter();
	const [isFloating, setIsFloating] = useState(true);

	useEffect(() => {
		if (router.pathname === "/contact" || router.pathname.includes("_admin")) {
			setIsFloating(false);
		} else {
			setIsFloating(true);
		}
	}, [router.pathname]);

	return (
		<>
			<Header />
			<MobileMenu />
			{isFloating && <FloatingBtn />}

			{children}
		</>
	);
};

export default HeaderLayout;
