import media from "@/styles/media";
import Link from "next/link";
import styled from "styled-components";
import Button from "./Button";
import { IconName } from "@/types/icon";
import useLogin from "@/provider/AppProvider/useLogin";
import { DATA_MENU_ADMIN, DATA_MENU_USER } from "@/data/menu";
import useMenu from "@/provider/AppProvider/useMenu";

interface MenuProps { }

const MenuWrapper = styled.div<{ active: boolean }>`
	height: ${(props) => props.theme.size.full_height};
	background-color: ${(props) => props.theme.color.white};
	${(props) => props.theme.layout.full_abs};
	position: fixed;
	z-index: ${(props) => props.theme.zIndex.menu};
	transform: translateX(${(props) => (props.active ? 0 : 100)}%);

	transition: ${(props) => props.theme.transition.default};
	transition-property: transform;
	padding: 16px;
	padding-top: 0;
	padding-bottom: 32px;
	display: flex;
	flex-direction: column;
	display: none;

	@media ${media.tablet} {
		width: 100%;
		border-radius: 0;
		display: block;
	}
`;

const Top = styled.div`
	height: ${(props) => props.theme.size.header.pc}px;
	align-items: center;
	justify-content: flex-end;
	display: flex;
	padding: 8px;
`;

const CloseBtn = styled(Button)`
	${(props) => props.theme.style.hoverStyle};
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const LinkWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-grow: 1;
`;

const LinkList = styled.li`
	padding: 16px;
	border-radius: 4px;
`;



const LinkCustom = styled(Link)`
	${(props) => props.theme.style.hoverStyle};
`;

const LogoutList = styled(LinkList)`
	border-top: 1px solid ${props => props.theme.color.div};
`;


const LogoutBtn = styled(Button)`
	padding: 0;
	font-size: inherit;
	border-radius: 0;
`;

const MobileMenu: React.FC<MenuProps> = () => {
	const { isActive, closeMenu } = useMenu();
	const { isLoggedIn, clientLogout } = useLogin();
	return (
		<MenuWrapper active={isActive}>
			<Top>
				<CloseBtn iconName={IconName.CLOSE} onClick={closeMenu} />
			</Top>
			<Nav>
				<LinkWrapper>
					{isLoggedIn !== null &&
						(isLoggedIn ? DATA_MENU_ADMIN : DATA_MENU_USER).map((el) => {
							return (
								<LinkList key={el.href}>
									<LinkCustom href={el.href}>{el.text}</LinkCustom>
								</LinkList>
							);
						})}
					{isLoggedIn === true &&
						<LogoutList>
							<LogoutBtn text="logout" onClick={clientLogout} />
						</LogoutList>}
				</LinkWrapper>
			</Nav>
		</MenuWrapper>
	);
};

export default MobileMenu;
