import styled from "styled-components";
import AdminList from "./AdminList";
import useAdminAction from "@/provider/AdminProvider/useAdminAction";
import useAdminForm from "@/provider/AdminProvider/useAdminForm";

interface AdminListsProps {
	data: any[];
	fields: string[];
	titleKey: string;
}

const ListUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const AdminLists: React.FC<AdminListsProps> = ({ data, titleKey, fields }) => {
	const { actionToEdit } = useAdminAction();
	const { changeCurrentData } = useAdminForm();

	const onEditClick = (id: string) => {
		actionToEdit();
		const currentData = data.find((el) => el.id === id);
		changeCurrentData(currentData);
	};

	return (
		<ListUl>
			{data.map((el) => {
				return (
					<AdminList
						key={el.id}
						id={el.id}
						title={el[titleKey]}
						fields={fields.map((field) => ({ field, value: el[field] }))}
						onEditClick={() => onEditClick(el.id)}
						onDeleteClick={() => null}
						onLinkClick={() => null}
					/>
				);
			})}
		</ListUl>
	);
};

export default AdminLists;
