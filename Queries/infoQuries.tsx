import { gql } from "apollo-boost";

export const GET_ALLINFO = gql`
	{
		getAllInfo {
			id
			year
			field
			text
			priority
		}
	}
`;

export const UPLOAD_INFO = gql`
	mutation uploadInfo($year: Int!, $text: String!, $field: InfoFeild!, $priority: Int) {
		uploadInfo(year: $year, text: $text, field: $field, priority: $priority) {
			id
			year
			field
			text
			priority
		}
	}
`;

export const UPDATE_INFO = gql`
	mutation updateInfo($id: String!, $year: Int, $text: String, $field: InfoFeild, $priority: Int) {
		updateInfo(id: $id, year: $year, text: $text, field: $field, priority: $priority) {
			id
			year
			field
			text
			priority
		}
	}
`;
export const DELETE_INFO = gql`
	mutation deleteInfo($id: String!) {
		deleteInfo(id: $id) {
			id
		}
	}
`;
