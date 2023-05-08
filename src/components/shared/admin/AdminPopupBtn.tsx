import styled from "styled-components";
import Button, { BtnTypeEnum } from "../Button";
import useAdminAction from "@/provider/AdminProvider/useAdminAction";
import { AdminActionEnum } from "@/types/provider/adminProvider";
import useAdminForm from "@/provider/AdminProvider/useAdminForm";
import { DATA_MESSAGE } from "@/data/message";

export interface AdminPopupBtnProps {
	createMutationName: string;
	createMutation: any;
}

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const AdminPopupBtn: React.FC<AdminPopupBtnProps> = ({ createMutationName, createMutation }) => {
	const { action, actionToNone } = useAdminAction();
	const { form } = useAdminForm();

	const onConfirmClick = async () => {
		let error, ok;
		if (action === AdminActionEnum.ADD) {
			const { error: createError, ok: createOk } = await createData();
			error = createError;
			ok = createOk;
		} else if (action === AdminActionEnum.EDIT) {
			updateData();
		}

		if (error) {
			alert(error);
			return;
		}

		if (ok) {
			alert(DATA_MESSAGE.SUCCESS_DATA);
			actionToNone();
			return;
		}
	};

	const createData = async () => {
		const {
			data: {
				[createMutationName]: { ok, error },
			},
		} = await createMutation({
			variables: {
				...form,
			},
		});

		return { ok, error };
	};

	const updateData = () => {
		console.log("updateData");
	};

	return (
		<BtnWrapper>
			<Button text="confirm" btnType={BtnTypeEnum.SOLID} onClick={onConfirmClick} />
		</BtnWrapper>
	);
};

export default AdminPopupBtn;
