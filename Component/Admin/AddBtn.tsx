import styled from "styled-components";
import BtnIcon from "../Btn/BtnIcon";
import ContainerLayout from "../../Layout/ContainerLayout";
import media from "../../Styles/media";
import { useAdminAction, AdminActionType } from "../../Context/AdminProvider";

interface AddBtnProps {
	small?: boolean;
}

const Container = styled(ContainerLayout)`
	position: relative;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	${(props) => props.theme.event.disable};
`;

const Btn = styled(BtnIcon)`
	width: 40px;
	height: 40px;
	position: absolute;
	cursor: pointer;
	right: 0;
	bottom: 64px;
	${(props) => props.theme.event.active};
	@media ${media.hover} {
		&:hover {
			transform: scale(1.1);
		}
	}
`;

const AddBtn: React.FC<AddBtnProps> = ({ small = false }) => {
	const { setAdminAction } = useAdminAction();
	const handleAddClick = () => {
		setAdminAction(AdminActionType.ADD);
	};
	return (
		<Container small={small}>
			<Btn icon="pluse" onClick={handleAddClick} />
		</Container>
	);
};

export default AddBtn;
