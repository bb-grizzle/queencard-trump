import styled from "styled-components";
import AdminList from "./AdminList";
import useAdminAction from "@/provider/AdminProvider/useAdminAction";
import useAdminForm from "@/provider/AdminProvider/useAdminForm";
import { DATA_MESSAGE } from "@/data/message";
import { DATA_ERROR } from "@/data/error";
import EmptyDisplay from "../EmptyDisplay";

interface AdminListsProps {
	data: any[];
	fields: string[];
	titleKey: string;
	path: string;
	deleteMutation: any;
	deleteMutationName: string;
}

const ListUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const AdminLists: React.FC<AdminListsProps> = ({ data, titleKey, fields, path, deleteMutation, deleteMutationName }) => {
	const { actionToEdit } = useAdminAction();
	const { changeCurrentId } = useAdminForm();

	const onEditClick = (id: number) => {
		actionToEdit();
		changeCurrentId(id);
	};

	const onLinkClick = (id: string) => {
		const href = `${path}/${id}`;
		window.open(href);
	};

	const onDeleteClick = async (id: string) => {
		const check = window.confirm(DATA_MESSAGE.DELETE_CONFIRM);

		if (check) {
			const {
				data: {
					[deleteMutationName]: { ok, error },
				},
			} = await deleteMutation({
				variables: {
					id: Number(id),
				},
			});

			if (error) {
				alert(error ?? DATA_ERROR.default.server);
				return;
			}

			if (ok) {
				alert(DATA_MESSAGE.SUCCESS_DATA);
				return;
			}
		}
	};

	return (
		<ListUl>
			{!data.length ? (
				<EmptyDisplay />
			) : (
				data.map((el) => {
					return (
						<AdminList
							key={el.id}
							id={el.id}
							title={el[titleKey]}
							fields={fields.map((field) => ({ field, value: el[field] }))}
							onEditClick={() => onEditClick(el.id)}
							onDeleteClick={() => onDeleteClick(el.id)}
							onLinkClick={() => onLinkClick(el.id)}
						/>
					);
				})
			)}
		</ListUl>
	);
};

export default AdminLists;
