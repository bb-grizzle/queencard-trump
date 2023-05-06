import styled from "styled-components";
import AdminList from "./AdminList";

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
	return (
		<ListUl>
			{data.map((el) => {
				return (
					<AdminList
						key={el.id}
						id={el.id}
						title={el[titleKey]}
						fields={fields.map((field) => ({ field, value: el[field] }))}
						onEditClick={() => null}
						onDeleteClick={() => null}
						onLinkClick={() => null}
					/>
				);
			})}
		</ListUl>
	);
};

export default AdminLists;
