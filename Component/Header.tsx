import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import Logo from "./Logo";
import { menu } from "../Data/menu";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const HeaderWrapper = styled.header`
	height: 120px;
`;

const Inner = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

const Gnb = styled.ul`
	height: 100%;
	display: flex;
	position: absolute;
	align-items: center;
	padding: 0 8px;
	left: 0;
	top: 0;
	background-color: black;
	color: ${(props) => props.theme.color.white};
	overflow: hidden;

	clip-path: polygon(0 0, 0 0, 0px 100%, 0 100%);
	transition: ${(props) => props.theme.transition.default};
`;

const GnbWrapper = styled.div`
	position: relative;
	margin-left: 20px;
	font-size: 18px;
	height: 36px;
	display: flex;
	align-items: center;
	${(props) => props.theme.div.left()};
	font-weight: 300;

	&:hover {
		${Gnb} {
			/* opacity: 0; */
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
`;

const NowGnb = styled.div`
	padding: 0 16px;
	text-transform: capitalize;
	cursor: pointer;
`;

const GnbList = styled.li<{ active: boolean }>`
	text-transform: capitalize;
	opacity: ${(props) => (props.active ? "1" : "0.5")};

	&:hover {
		opacity: 1;
	}

	> a {
		display: inline-block;
		padding: 0 12px;
	}
`;

const Header = () => {
	const { pathname } = useRouter();
	const [nowGnb, setNowGnb] = useState("");

	useEffect(() => {
		if (pathname) {
			if (pathname === "/") {
				setNowGnb("work");
			} else {
				setNowGnb(pathname.split("/")[1]);
			}
		}
	}, [pathname]);

	return (
		<HeaderWrapper>
			<ContainerLayout>
				<Inner>
					<Logo />

					<GnbWrapper>
						<NowGnb>{nowGnb}</NowGnb>

						<Gnb>
							{menu.map((el) => {
								return (
									<GnbList key={el.id} active={pathname === el.href ? true : false}>
										<Link href={el.href}>
											<a>{el.id}</a>
										</Link>
									</GnbList>
								);
							})}
						</Gnb>
					</GnbWrapper>
				</Inner>
			</ContainerLayout>
		</HeaderWrapper>
	);
};

export default Header;
