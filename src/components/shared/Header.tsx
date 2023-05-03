import media from "@/styles/media";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";

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

const Header = () => {
	return (
		<HeaderComp>
			<ContainerCustom>
				<Logo />
				<MenuBtn />
			</ContainerCustom>
		</HeaderComp>
	);
};

export default Header;
