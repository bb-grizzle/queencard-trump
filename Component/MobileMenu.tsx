import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import { useIsMenuClick, useIsAdmin } from "../Context/AppProvider";
import { MENU, MENU_ADMIN } from "../Data/menu";
import NavLink from "./NavLink";
import Dim from "./Dim";
import { useState, useEffect } from "react";
import BtnText from "./Btn/BtnText";

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	${(props) => props.theme.event.disable};
`;
const MenuWrapper = styled.div<{ active: boolean }>`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding-top: ${(props) => props.theme.size.header.mobile};
	background-color: ${(props) => props.theme.color.white};
	transition: ${(props) => props.theme.transition.default};
	transition-property: transform;
	transform: ${(props) => `translateX(${!props.active ? "100%" : 0})`};
	${(props) => props.theme.event.active};
`;

const Menu = styled.ul`
	padding-top: 32px;
`;

const MenuList = styled(NavLink)`
	margin-bottom: 16px;
	&.active {
		font-weight: 700;
	}
`;

const BtnLogout = styled(BtnText)`
	border-top: 1px solid gray;
	padding-top: 16px;
	font-size: 18px;
	line-height: 1.44;
`;

const MobileMenu = () => {
	const { isMenuClick, setIsMenuClick } = useIsMenuClick();
	const [nowMenu, setNowMenu] = useState(MENU);
	const { isAdmin } = useIsAdmin();

	useEffect(() => {
		if (isAdmin) {
			setNowMenu(MENU_ADMIN);
		} else {
			setNowMenu(MENU);
		}
	}, [isAdmin]);

	const handleMenuClick = () => {
		setIsMenuClick(false);
	};

	return (
		<Wrapper>
			<Dim active={isMenuClick} />
			<MenuWrapper active={isMenuClick}>
				<ContainerLayout>
					<Menu>
						{nowMenu.map((menu) => {
							return <MenuList key={menu.id} href={menu.href} name={menu.name} onClick={handleMenuClick} />;
						})}
					</Menu>
					<BtnLogout text="로그아웃" onClick={() => null} />
				</ContainerLayout>
			</MenuWrapper>
		</Wrapper>
	);
};

export default MobileMenu;
