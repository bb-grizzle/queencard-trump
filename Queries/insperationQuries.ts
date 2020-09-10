import { gql } from "apollo-boost";
export const GET_INSPERATION = gql`
	{
		getInsperation {
			id
			title
			thumbnail {
				id
				url
			}
		}
	}
`;

export const UPLOAD_INSPERATION = gql`
	mutation uploadInsperation($title: String!, $imageId: String!) {
		uploadInsperation(title: $title, imageId: $imageId) {
			id
			title
			thumbnail {
				id
				url
			}
		}
	}
`;

export const UPDATE_INSPERATION = gql`
	mutation updateInsperation($id: String!, $title: String, $imageId: String) {
		updateInsperation(id: $id, title: $title, imageId: $imageId) {
			id
			title
			thumbnail {
				id
				url
			}
		}
	}
`;

export const DELETE_INSPERATION = gql`
	mutation deleteInsperation($id: String!) {
		deleteInsperation(id: $id) {
			id
		}
	}
`;
