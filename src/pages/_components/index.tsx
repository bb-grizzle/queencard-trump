import Container from "@/components/shared/Container";
import PageLayout from "@/layout/PageLayout";
import { ROUTER } from "@/router";
import Link from "next/link";
import styled from "styled-components";

const ContainerComp = styled(Container)`
	padding-top: 32px;
`;

const Title = styled.h1`
	font-size: 20px;
	font-weight: lighter;
	text-decoration: underline;
	margin-bottom: 16px;
`;

const ListWrapper = styled.ul`
	display: flex;
	gap: 8px;
`;

const List = styled.li``;

const LinkCustom = styled(Link)`
	&:hover {
		opacity: 0.8;
	}
`;

const Components = () => {
	return (
		<PageLayout title="components">
			<ContainerComp>
				<Title>componetns</Title>
				<ListWrapper>
					<List>
						<LinkCustom href={ROUTER.COMPONENT_ICON}>icon</LinkCustom>
					</List>
					<List>
						<LinkCustom href={ROUTER.COMPONENT_BUTTON}>button</LinkCustom>
					</List>
					<List>
						<LinkCustom href={ROUTER.COMPONENT_INPUT}>input</LinkCustom>
					</List>
				</ListWrapper>
			</ContainerComp>
		</PageLayout>
	);
};

export default Components;
