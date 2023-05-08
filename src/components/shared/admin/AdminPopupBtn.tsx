import styled from "styled-components";
import Button, { BtnTypeEnum } from "../Button";
import useAdminAction from "@/provider/AdminProvider/useAdminAction";
import { AdminActionEnum } from "@/types/provider/adminProvider";
import useAdminForm from "@/provider/AdminProvider/useAdminForm";
import { DATA_MESSAGE } from "@/data/message";
import { DATA_ERROR } from "@/data/error";

export interface AdminPopupBtnProps {
	createMutation: any;
	createMutationName: string;
	updateMutation: any;
	updateMutationName: string;
}

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const AdminPopupBtn: React.FC<AdminPopupBtnProps> = ({ createMutationName, createMutation, updateMutation, updateMutationName }) => {
	const { action, actionToNone } = useAdminAction();
	const { form, currentData } = useAdminForm();

	const onConfirmClick = async () => {
		const { error, ok } = action === AdminActionEnum.ADD ? await createData() : await updateData();

		if (error) {
			alert(error ?? DATA_ERROR.default.server);
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

	const updateData = async () => {
		if (!currentData || !currentData?.id) {
			return {
				ok: false,
				error: DATA_ERROR.default.id,
			};
		}
		const {
			data: {
				[updateMutationName]: { ok, error },
			},
		} = await updateMutation({
			variables: {
				id: Number(currentData.id),
				...form,
			},
		});

		return { ok, error };
	};

	return (
		<BtnWrapper>
			<Button text="confirm" btnType={BtnTypeEnum.SOLID} onClick={onConfirmClick} />
		</BtnWrapper>
	);
};

export default AdminPopupBtn;
