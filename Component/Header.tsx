import styled from "styled-components";
import { MENU } from "../Data/menu";
import ContainerLayout from "../Layout/ContainerLayout";
import Link from "next/link";
import NavLink from "./NavLink";
import media from "../Styles/media";
import BtnIcon from "./Btn/BtnIcon";
import { useIsMenuClick } from "../Context/AppProvider";

const Wrapper = styled.header`
	width: 100%;
	height: ${(props) => props.theme.size.header.pc};
	position: absolute;
	z-index: ${(props) => props.theme.zIndex.header};

	@media ${media.tablet} {
		height: ${(props) => props.theme.size.header.mobile};
	}
`;

const Container = styled(ContainerLayout)`
	display: flex;
	align-items: center;

	@media ${media.tablet} {
		justify-content: space-between;
	}
`;

const LogoWrapper = styled.div`
	width: 25%;
`;
const Nav = styled.nav`
	width: 75%;

	@media ${media.tablet} {
		display: none;
	}
`;

const Logo = styled.img`
	@media ${media.tablet} {
		width: 100px;
	}
`;

const MenuWrapper = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
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

const Header = () => {
	const { isMenuClick, setIsMenuClick } = useIsMenuClick();

	const handleMenuClick = () => {
		setIsMenuClick((prev) => !prev);
	};
	return (
		<Wrapper>
			<Container>
				<LogoWrapper>
					<Link href="/">
						<a>
							<Logo src="/image/logo.png" />
						</a>
					</Link>
				</LogoWrapper>

				<BtnWrapper onClick={handleMenuClick}>
					<BtnIcon icon="menu" />
					<BtnClose icon="close" active={isMenuClick} />
				</BtnWrapper>

				<Nav>
					<MenuWrapper>
						{MENU.map((menu) => {
							return <Menu key={menu.id} href={menu.href} name={menu.name} />;
						})}
					</MenuWrapper>
				</Nav>
			</Container>
		</Wrapper>
	);
};

export default Header;
