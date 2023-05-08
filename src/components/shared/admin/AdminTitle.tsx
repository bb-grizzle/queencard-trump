import styled from "styled-components";
import Title, { TitleProps } from "../Title";
import useAdminAction from "@/provider/AdminProvider/useAdminAction";
import { IconName } from "@/types/icon";

interface AdminTitleProps extends TitleProps {}

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 32px;
`;

const Text = styled.h1`
	${(props) => props.theme.fontStyle.display.small};
`;

const AdminTitle: React.FC<AdminTitleProps> = ({ text, button }) => {
	const { actionToAdd } = useAdminAction();
	return <Title text={text} button={{ ...button, onClick: actionToAdd, iconName: IconName.ADD }} />;
};

export default AdminTitle;
