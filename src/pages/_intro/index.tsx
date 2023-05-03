import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import IntroLayout from "@/layout/IntroLayout";
import PageLayout from "@/layout/PageLayout";
import { ROUTER } from "@/router";
import Link from "next/link";
import styled from "styled-components";

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
		<IntroLayout title="components">
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
		</IntroLayout>
	);
};

export default Components;
