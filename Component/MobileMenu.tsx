import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import { useIsMenuClick, useIsAdmin } from "../Context/AppProvider";
import { MENU, MENU_ADMIN } from "../Data/menu";
import NavLink from "./NavLink";
import Dim, { DimType } from "./Dim";
import { useState, useEffect } from "react";
import BtnText from "./Btn/BtnText";
import { fbSignout } from "../Firebase/firebase";

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	${(props) => props.theme.event.disable};
	z-index: ${(props) => props.theme.zIndex.menu};
`;
const MenuWrapper = styled.div<{ active: boolean }>`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding-top: ${(props) => `${props.theme.size.header.mobile}px`};
	background-color: ${(props) => props.theme.color.white};
	transition: ${(props) => props.theme.transition.default};
	transition-property: transform;
	transform: ${(props) => `translateX(${!props.active ? "100%" : 0})`};
	${(props) => props.theme.event.active};
	z-index: ${(props) => props.theme.zIndex.menu};
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

	const handleLogout = () => {
		if (confirm("로그아웃 하시겠습니까?")) {
			fbSignout();
			location.reload();
		} else {
			return;
		}
	};
	return (
		<Wrapper>
			<Dim active={isMenuClick} type={DimType.MIN} />
			<MenuWrapper active={isMenuClick}>
				<ContainerLayout>
					<Menu>
						{nowMenu.map((menu) => {
							return <MenuList key={menu.id} href={menu.href} name={menu.name} onClick={handleMenuClick} />;
						})}
					</Menu>
					<BtnLogout text="로그아웃" onClick={handleLogout} />
				</ContainerLayout>
			</MenuWrapper>
		</Wrapper>
	);
};

export default MobileMenu;
