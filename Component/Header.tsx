import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import Logo from "./Logo";
import { MENU, MENU_ADMIN } from "../Data/menu";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import media from "../Styles/media";
import useSize from "../Hook/useSize";
import { isTouchDevice } from "../util/isTouchDevice";

const HeaderWrapper = styled.header`
	height: 120px;

	@media ${media.tablet} {
		height: 60px;
	}
`;

const Inner = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

const Gnb = styled.ul<{ isMenuClick: boolean }>`
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
	z-index: ${(props) => props.theme.zIndex.menu};

	clip-path: polygon(0 0, 0 0, 0px 100%, 0 100%);
	transition: ${(props) => props.theme.transition.default};

	@media ${media.touch} {
		clip-path: ${(props) => (props.isMenuClick ? `polygon(0 0, 100% 0, 100% 100%, 0 100%)` : `polygon(0 0, 0 0, 0px 100%, 0 100%)`)};
	}

	@media ${media.tablet} {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		flex-direction: column;
		align-items: flex-start;
		padding-top: 4rem;
		font-size: 24px;
		transform: ${(props) => (!props.isMenuClick ? "translateY(-100%);" : "translateY(0%);")};
		transition-duration: 0.8s;
		transition-timing-function: cubic-bezier(0.75, -0.04, 0.14, 0.99);
	}
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

	@media ${media.hover} {
		&:hover {
			${Gnb} {
				clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
			}
		}
	}

	@media ${media.tablet} {
		margin-left: 14px;
		font-size: 16px;
	}
`;

const NowGnb = styled.div`
	padding: 0 16px;
	text-transform: capitalize;
	cursor: pointer;

	@media ${media.tablet} {
		padding: 14px;
	}
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

	@media ${media.tablet} {
		margin-bottom: 1rem;
		border-bottom: 1px solid white;
	}
`;

const Header = () => {
	const { pathname } = useRouter();
	const [menu, setMenu] = useState(MENU);
	const [nowGnb, setNowGnb] = useState("");
	const [isMenuClick, setIsMenuClick] = useState(false);
	const { isTablet } = useSize();

	useEffect(() => {
		setIsMenuClick(false);
	}, [isTablet]);

	useEffect(() => {
		if (pathname) {
			if (pathname === "/") {
				setNowGnb("work");
			} else {
				setNowGnb(pathname.split("/")[1]);

				if (pathname.split("/")[1] === "_admin") {
					setMenu(MENU_ADMIN);
				}
			}
		}
	}, [pathname]);

	const handleGnbClick = () => {
		if (isTablet || isTouchDevice()) {
			setIsMenuClick((n) => !n);
		}
	};

	return (
		<HeaderWrapper>
			<ContainerLayout>
				<Inner>
					<Link href="/">
						<a>
							<Logo size={isTablet ? 16 : null} />
						</a>
					</Link>

					<GnbWrapper>
						<NowGnb onClick={handleGnbClick}>{nowGnb}</NowGnb>

						<Gnb
							isMenuClick={isMenuClick}
							onClick={() => {
								setIsMenuClick(false);
							}}
						>
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
