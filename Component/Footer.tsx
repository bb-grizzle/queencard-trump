import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import Logo from "./Logo";
import { MENU } from "../Data/menu";
import Link from "next/link";
import { links } from "../Data/links";
import Icon from "../Asset/icon";
import media from "../Styles/media";

const Wrapper = styled.footer`
	margin-top: 100px;

	@media ${media.tablet} {
		margin-top: 24px;
	}
`;

const Container = styled(ContainerLayout)`
	border-top: 1px solid black;
	padding: 40px 0;
	display: flex;
	justify-content: space-between;

	@media ${media.tablet} {
		flex-direction: column;
	}
`;

const Col = styled.div``;

const ColLeft = styled(Col)`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	@media ${media.tablet} {
		align-items: flex-start;
		margin-top: 20px;
	}
`;

const Menu = styled.ul`
	margin-bottom: 32px;
	a {
		color: ${(props) => props.theme.color.gray.default};
		display: inline-block;
		text-transform: capitalize;
		margin-left: 20px;
	}

	@media ${media.tablet} {
		display: flex;
		flex-direction: column;
		a {
			margin-left: 0px;
			margin-bottom: 16px;
		}
	}
`;
const Links = styled.ul`
	display: flex;
`;

const HoverLink = styled.div`
	${(props) => props.theme.layout.center_flex};
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	border-radius: 100%;
	background: ${(props) => props.theme.color.black};

	clip-path: circle(50% at 50% 160%);
	transition: ${(props) => props.theme.transition.default};
`;

const LinkComp = styled.a`
	width: 40px;
	height: 40px;

	${(props) => props.theme.layout.center_flex};
	border-radius: 20px;
	position: relative;
	margin-left: 4px;

	@media ${media.tablet} {
		margin-left: 0;
		margin-right: 4px;
	}

	@media ${media.hover} {
		&:hover {
			${HoverLink} {
				clip-path: circle(50% at 50% 50%);
			}
		}
	}
`;

const HoverIcon = styled(Icon)``;

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<Col>
					<Logo />
				</Col>
				<ColLeft>
					<Menu>
						{MENU.map((el) => {
							return (
								<Link href={el.href} key={el.id}>
									<a>{el.id}</a>
								</Link>
							);
						})}
					</Menu>
					<Links>
						{links.map((el) => {
							return (
								<LinkComp href={el.link} key={el.id} target="__blank">
									<Icon name={el.id} />
									<HoverLink>
										<HoverIcon name={el.id} color="white" />
									</HoverLink>
								</LinkComp>
							);
						})}
					</Links>
				</ColLeft>
			</Container>
		</Wrapper>
	);
};

export default Footer;
