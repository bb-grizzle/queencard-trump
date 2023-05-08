import styled from "styled-components";
import Button from "../Button";
import { IconName } from "@/types/icon";
import moment from "moment";
import { MouseEvent } from "react";

interface AdminListProps {
	id: number;
	title: string;
	fields: { field: string; value: string }[];
	className?: string;
	onLinkClick: () => void;
	onDeleteClick: () => void;
	onEditClick: () => void;
}

const List = styled.li`
	border: 1px solid ${(props) => props.theme.colorPalette.bw[200]};
	padding: 16px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.color.white};
	width: 100%;
	cursor: pointer;
	&:hover {
		border-color: ${(props) => props.theme.color.black};
	}
`;

const ListHeader = styled.div`
	display: flex;
	gap: 8px;
`;

const ListTitle = styled.h3`
	${(props) => props.theme.fontStyle.headline.small};
	padding-bottom: 12px;
	flex-grow: 1;
	flex-shrink: 1;
`;

const BtnWrapper = styled.div`
	display: flex;
	gap: 2px;
`;

const FieldUl = styled.ul``;
const FieldList = styled.li`
	display: flex;
	gap: 16px;
`;

const FieldText = styled.span`
	${(props) => props.theme.fontStyle.body.medium};
	line-height: 1.7;
	font-weight: bold;
	color: ${(props) => props.theme.colorPalette.bw[900]};
`;

const ValueText = styled.span`
	font-weight: normal;
	color: ${(props) => props.theme.colorPalette.bw[700]};
`;

const AdminList: React.FC<AdminListProps> = ({ className, title, fields, onDeleteClick, onEditClick, onLinkClick }) => {
	const preventBubble = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, fn: () => void) => {
		e.preventDefault();
		e.stopPropagation();

		fn();
	};

	return (
		<List className={className} onClick={onEditClick}>
			<ListHeader>
				<ListTitle>{title}</ListTitle>
				<BtnWrapper>
					<Button iconName={IconName.LINK} onClick={(e) => preventBubble(e, onLinkClick)} />
					<Button iconName={IconName.PENCIL} onClick={(e) => preventBubble(e, onEditClick)} />
					<Button iconName={IconName.TRASH} onClick={(e) => preventBubble(e, onDeleteClick)} />
				</BtnWrapper>
			</ListHeader>
			<FieldUl>
				{fields.map((el, index) => {
					let value = el.value;
					if (el.field === "createdAt" || el.field === "updatedAt") {
						value = moment(Number(el.value)).format("YYYY.MM.DD | h:mm:ss a");
					}
					return (
						<FieldList key={index}>
							<FieldText>
								{el.field} : <ValueText>{value}</ValueText>
							</FieldText>
						</FieldList>
					);
				})}
			</FieldUl>
		</List>
	);
};

export default AdminList;
