import Container from "@/layout/ContainerLayout";
import media from "@/styles/media";
import styled from "styled-components";
import { IconName } from "@/types/icon";
import useAdminAction from "@/provider/AdminProvider/useAdminAction";
import { AdminActionEnum } from "@/types/provider/adminProvider";
import Title from "../Title";
import { useCallback } from "react";
import AdminUserInputs from "./AdminUserInputs";
import AdminPopupBtn, { AdminPopupBtnProps } from "./AdminPopupBtn";

interface AdminPopupProps extends AdminPopupBtnProps {
	title: string;
}

const Section = styled.section<{ active: boolean }>`
	position: fixed;
	overflow: scroll;
	height: ${(props) => props.theme.size.full_height};
	top: 0;
	left: 0;
	width: 100%;
	background-color: white;
	padding: ${(props) => props.theme.size.header.pc + props.theme.size.page.padding.pc}px 0;
	transform: translateY(${(props) => (props.active ? 0 : "100%")});
	transition: ${(props) => props.theme.transition.default};
	transition-property: transform;

	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.header.tablet}px;
		padding: ${(props) => props.theme.size.header.tablet + props.theme.size.page.padding.tablet}px 0;
	}
`;

const ContainerCustom = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const AdminPopup: React.FC<AdminPopupProps> = ({ title, ...rest }) => {
	const { action, actionToNone } = useAdminAction();

	const renderInputs = useCallback(() => {
		switch (title) {
			case "user":
				return <AdminUserInputs />;
			default:
				return null;
		}
	}, [title]);

	return (
		<Section active={action !== AdminActionEnum.NONE}>
			<ContainerCustom>
				{/* title */}
				<Title text={`${action === AdminActionEnum.ADD ? "add" : "edit"} ${title}`} button={{ iconName: IconName.CLOSE, onClick: actionToNone }} />

				{/* inputs */}
				{renderInputs()}

				{/* button */}
				<AdminPopupBtn {...rest} />
			</ContainerCustom>
		</Section>
	);
};

export default AdminPopup;
