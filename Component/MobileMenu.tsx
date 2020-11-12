import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import { useIsMenuClick } from "../Context/AppProvider";
import { MENU } from "../Data/menu";
import NavLink from "./NavLink";
import Dim from "./Dim";

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
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
		<Wrapper>
			<Dim active={isMenuClick} />
			<MenuWrapper active={isMenuClick}>
				<ContainerLayout>
					<Menu>
						{MENU.map((menu) => {
							return <MenuList key={menu.id} href={menu.href} name={menu.name} onClick={handleMenuClick} />;
						})}
					</Menu>
				</ContainerLayout>
			</MenuWrapper>
		</Wrapper>
	);
};

export default MobileMenu;
