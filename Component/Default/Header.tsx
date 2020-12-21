import styled, { css } from "styled-components";
import { MENU, MENU_ADMIN } from "../../Data/menu";
import ContainerLayout from "../../Layout/ContainerLayout";
import NavLink from "./NavLink";
import media from "../../Styles/media";
import BtnIcon from "../Btn/BtnIcon";
import { useIsMenuClick, useIsAdmin } from "../../Context/AppProvider";
import { useState, useEffect } from "react";
import BtnText from "../Btn/BtnText";
import Logo from "./Logo";

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

const Container = styled(ContainerLayout)`
	display: flex;
	align-items: center;

	@media ${media.tablet} {
		justify-content: space-between;
	}
`;

const LogoWrapper = styled(Logo)`
	width: 25%;
`;
const Nav = styled.nav<{ isAdmin: boolean }>`
	width: 75%;

	${(props) =>
		props.isAdmin &&
		css`
			display: flex;
			justify-content: flex-end;
		`};

	@media ${media.tablet} {
		display: none;
	}
`;

const MenuWrapper = styled.ul<{ isAdmin: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	${(props) =>
		props.isAdmin &&
		css`
			> li {
				margin: 0 !important ;
				margin-left: 32px !important ;
			}
		`};
`;

const Menu = styled(NavLink)`
	color: ${(props) => props.theme.color.gray.dark};

	&:not(:last-child) {
		margin-right: 9%;
	}

	&:hover {
		opacity: 0.8;
	}

	&.active {
		font-weight: 700;
	}

	@media ${media.tablet} {
		&:not(:last-child) {
			margin-right: 64px;
		}
	}
`;

const BtnWrapper = styled.div`
	display: none;
	position: relative;
	@media ${media.tablet} {
		display: block;
	}
`;

const BtnClose = styled(BtnIcon)<{ active: boolean }>`
	position: absolute;
	left: 0;
	top: 0;
	opacity: ${(props) => (props.active ? 1 : 0)};
`;

const BtnLogout = styled(BtnText)`
	color: ${(props) => props.theme.color.gray.dark};
	font-size: 18px;
	line-height: 1.44;
	margin-left: 32px;
	cursor: pointer;
	@media ${media.hover} {
		&:hover {
			opacity: 0.6;
		}
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

	return <Wrapper>header</Wrapper>;
};

export default Header;
