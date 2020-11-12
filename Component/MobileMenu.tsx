import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import { useIsMenuClick } from "../Context/AppProvider";
import { MENU } from "../Data/menu";
import NavLink from "./NavLink";

const Wrapper = styled.div<{ active: boolean }>`
	padding-top: ${(props) => props.theme.size.header.mobile};
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${(props) => props.theme.color.white};
	width: 100%;
	height: 100%;
	transition: ${(props) => props.theme.transition.default};
	transition-property: transform;
	transform: ${(props) => `translateX(${!props.active ? "100%" : 0})`};
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

const MobileMenu = () => {
	const { isMenuClick, setIsMenuClick } = useIsMenuClick();

	const handleMenuClick = () => {
		setIsMenuClick(false);
	};

	return (
		<Wrapper active={isMenuClick}>
			<ContainerLayout>
				<Menu>
					{MENU.map((menu) => {
						return <MenuList key={menu.id} href={menu.href} name={menu.name} onClick={handleMenuClick} />;
					})}
				</Menu>
			</ContainerLayout>
		</Wrapper>
	);
};

export default MobileMenu;
