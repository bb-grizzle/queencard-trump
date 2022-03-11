import styled, { css } from "styled-components";
import { MENU, MENU_ADMIN } from "../../Data/menu";
import ContainerLayout from "../../Layout/ContainerLayout";
import NavLink from "./NavLink";
import media from "../../Styles/media";
import BtnIcon from "../Btn/BtnIcon";
import { useState, useEffect } from "react";
import BtnText from "../Btn/BtnText";
import Logo from "./Logo";
import { useIsMenuClick } from "../../Context/AppProvider/useIsMenuClick";
import { useIsAdmin } from "../../Context/AppProvider/useIsAdmin";

const Wrapper = styled.header`
	width: 100%;
	height: ${(props) => `${props.theme.size.header.pc}px`};
	position: fixed;
	left: 0;
	top: 0;
	z-index: ${(props) => props.theme.zIndex.header};
	background-color: ${(props) => props.theme.color.white};

	@media ${media.tablet} {
		height: ${(props) => `${props.theme.size.header.mobile}px`};
	}
`;

const Header = () => {
	const { isMenuClick, setIsMenuClick } = useIsMenuClick();
	const [nowMenu, setNowMenu] = useState(MENU);
	const { isAdmin } = useIsAdmin();
	const [hideNav, setHideNav] = useState(false);

	useEffect(() => {
		if (isAdmin) {
			setNowMenu(MENU_ADMIN);
		} else {
			setNowMenu(MENU);
		}
	}, [isAdmin]);

	useEffect(() => {
		if (isAdmin === false) {
			setHideNav(true);
		} else {
			setHideNav(false);
		}
	}, [isAdmin]);

	return (
		<Wrapper>
			<ContainerLayout>
				<Logo></Logo>
			</ContainerLayout>
		</Wrapper>
	);
};

export default Header;
