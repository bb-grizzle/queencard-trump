import useLogin from "@/provider/AppProvider/useLogin";
import { ROUTER } from "@/router";
import Link from "next/link";
import styled from "styled-components";

const Text = styled.span`
	font-weight: 900;
	font-size: 24px;
	font-style: italic;
`;

const Logo = () => {
	const { isLoggedIn } = useLogin()
	return (
		<Text>
			<Link href={isLoggedIn ? ROUTER.ADMIN : ROUTER.HOME}>logo</Link>
		</Text>
	);
};

export default Logo;
