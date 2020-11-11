import styled from "styled-components";
import { MENU } from "../Data/menu";
import ContainerLayout from "../Layout/ContainerLayout";
import Link from "next/link";

const Wrapper = styled.header`
	height: 140px;
`;

const Container = styled(ContainerLayout)`
	display: flex;
	align-items: center;
`;

const LogoWrapper = styled.div``;

const Logo = styled.img``;

const Nav = styled.nav``;

const MenuWrapper = styled.ul`
	display: flex;
`;

const Menu = styled.li``;

const Header = () => {
	return (
		<Wrapper>
			<Container>
				<LogoWrapper>
					<Logo src="/image/logo.png" />
				</LogoWrapper>
				<Nav>
					<MenuWrapper>
						{MENU.map((menu) => {
							return (
								<Menu key={menu.id}>
									<Link href={menu.href}>
										<a>{menu.name}</a>
									</Link>
								</Menu>
							);
						})}
					</MenuWrapper>
				</Nav>
			</Container>
		</Wrapper>
	);
};

export default Header;
