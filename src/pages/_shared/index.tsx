import IntroLayout from "@/layout/IntroLayout";
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
		<IntroLayout title="shared components" backBtn={false}>
			<ListWrapper>
				<List>
					<LinkCustom href={ROUTER.SHARED_ICON}>icon</LinkCustom>
				</List>
				<List>
					<LinkCustom href={ROUTER.SHARED_BUTTON}>button</LinkCustom>
				</List>
				<List>
					<LinkCustom href={ROUTER.SHARED_INPUT}>input</LinkCustom>
				</List>
				<List>
					<LinkCustom href={ROUTER.SHARED_ADMIN}>admin</LinkCustom>
				</List>
			</ListWrapper>
		</IntroLayout>
	);
};

export default Components;
