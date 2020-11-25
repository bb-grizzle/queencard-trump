import styled from "styled-components";
import Submit from "./Submit";
import BtnIcon from "../Btn/BtnIcon";
import { useAdminAction, AdminActionType } from "../../Context/AdminProvider";
interface FormDefaultProps {
	onSubmit: () => void;
	onDelete?: () => void;
	icon?: string;
	deleteDisable?: boolean;
}
const Wrapper = styled.form``;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: ${(props) => `${props.theme.size.margin.submit_top}px`};
`;
const BtnSubmit = styled(Submit)`
	margin-left: 16px;
`;

const BtnDelete = styled(BtnIcon)`
	cursor: pointer;
`;
const FormDefault: React.FC<FormDefaultProps> = ({ children, onSubmit, onDelete, icon = "arrow_right", deleteDisable }) => {
	const { adminAction } = useAdminAction();
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};
	const handleDeleteClick = () => {
		onDelete();
	};
	return (
		<Wrapper onSubmit={handleSubmit}>
			{children}
			<BtnWrapper>
				{adminAction === AdminActionType.EDIT && !deleteDisable && <BtnDelete icon={"delete"} size={40} onClick={handleDeleteClick} />}
				<BtnSubmit icon={icon} />
			</BtnWrapper>
		</Wrapper>
	);
};

export default FormDefault;
