import styled from "styled-components";
import PageContainer from "../Layout/PageContainer";
import TitleLg from "../Component/text/TitleLg";
import ContainerLayout from "../Layout/ContainerLayout";
import Paragraph from "../Component/text/Paragraph";
import { MENU } from "../Data/menu";
import Link from "next/link";

const Wrapper = styled.div`
	height: 100%;
`;

const PageContainerCustom = styled(PageContainer)`
	height: ${(props) => props.theme.layout.full_height};
	position: relative;
	padding-bottom: 32px;
`;
const Container = styled(ContainerLayout)`
	position: relative;
`;
const TitleWrapper = styled.div``;

const Title = styled(TitleLg)`
	margin-bottom: 0;
`;
const RouterWrapper = styled.ul`
	position: absolute;
	right: 0%;
	bottom: 0;
`;
const RouterList = styled.li`
	text-transform: capitalize;
	border-bottom: 2px solid ${(props) => props.theme.color.black};
	margin-bottom: 16px;
	font-size: 24px;
	> a {
		display: block;
	}
`;
const Custom404 = () => {
	return (
		<Wrapper>
			<PageContainerCustom paddingTop={true}>
				<Container>
					<TitleWrapper>
						<Title title="존재하지 않는" />
						<Title title="페이지 입니다. " />
						<Paragraph text="" />
						<Paragraph text="-----------" />
					</TitleWrapper>

					<RouterWrapper>
						{MENU.map((el) => {
							console.log(el);
							return (
								<RouterList key={el.id}>
									<Link href={el.href}>
										<a>{el.id}</a>
									</Link>
								</RouterList>
							);
						})}
					</RouterWrapper>
				</Container>
			</PageContainerCustom>
		</Wrapper>
	);
};

export default Custom404;
