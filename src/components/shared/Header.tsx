import media from "@/styles/media";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import useLogin from "@/provider/AppProvider/useLogin";
import { DATA_MENU_USER, DATA_MENU_ADMIN } from "@/data/menu";
import Link from "next/link";
import Button from "./Button";
import useMenu from "@/provider/AppProvider/useMenu";
import { IconName } from "@/types/icon";

const HeaderComp = styled.header`
	position: absolute;
	width: 100%;
	height: ${(props) => props.theme.size.header.pc}px;
	z-index: ${(props) => props.theme.zIndex.header};
	border-bottom: 1px solid ${(props) => props.theme.colorPalette.bw[200]};
	@media ${media.tablet} {
		height: ${(props) => props.theme.size.header.tablet}px;
	}
`;

const ContainerCustom = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MenuWrapper = styled.ul`
	display: flex;
	gap: 12px;
	@media ${media.tablet} {
		display: none;
	}
`;

const MenuList = styled.li``;

const MenuBtn = styled(Button)`
	display: none;
	@media ${media.tablet} {
		display: block;
	}
`;

const Header = () => {
	const { isLoggedIn } = useLogin();
	const { openMenu } = useMenu();
	return (
		<HeaderComp>
			<ContainerCustom>
				<Logo />
				<MenuWrapper>
					{isLoggedIn !== null &&
						(isLoggedIn ? DATA_MENU_ADMIN : DATA_MENU_USER).map((el) => {
							return (
								<MenuList key={el.href}>
									<Link href={el.href}>{el.text}</Link>
								</MenuList>
							);
						})}
				</MenuWrapper>
				<MenuBtn iconName={IconName.MENU} onClick={openMenu} />
			</ContainerCustom>
		</HeaderComp>
	);
};

export default Header;
