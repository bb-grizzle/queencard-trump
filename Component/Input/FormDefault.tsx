import styled from "styled-components";
import Submit from "./Submit";
import BtnIcon from "../Btn/BtnIcon";
import media from "../../Styles/media";
import { useAdminAction, AdminActionType } from "../../Context/AdminProvider";
interface FormDefaultProps {
	onSubmit: () => void;
	onDelete: () => void;
	icon?: string;
}
const Wrapper = styled.form``;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 56px;
`;
const BtnSubmit = styled(Submit)`
	margin-left: 16px;
`;

const BtnDelete = styled(BtnIcon)`
	@media ${media.hover} {
		&:hover {
			transform: scale(1.1);
		}
	}
`;
const FormDefault: React.FC<FormDefaultProps> = ({ children, onSubmit, onDelete, icon = "arrow_right" }) => {
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
				{adminAction === AdminActionType.EDIT && <BtnDelete icon={"delete"} size={40} onClick={handleDeleteClick} />}
				<BtnSubmit icon={icon} />
			</BtnWrapper>
		</Wrapper>
	);
};

export default FormDefault;
