import { gql } from "apollo-boost";
export const GET_WORK = gql`
	query {
		getWork {
			id
			title
			date
			descript
			double
			images {
				id
				url
			}
		}
	}
`;

export const UPLOAD_WORK = gql`
	mutation uploadWork($date: String!, $title: String!, $descript: String!, $images: [String!]!, $double: Boolean!) {
		uploadWork(date: $date, title: $title, descript: $descript, images: $images, double: $double) {
			id
			date
			descript
			double
			images {
				id
				url
			}
			title
		}
	}
`;

export const UPDATE_WORK = gql`
	mutation updateWork($id: String!, $title: String, $date: String, $descript: String, $deleteImage: [String!], $addImages: [String!], $double: Boolean!) {
		updateWork(id: $id, title: $title, date: $date, descript: $descript, deleteImage: $deleteImage, addImages: $addImages, double: $double) {
			id
			date
			descript
			double
			images {
				id
				url
			}
			title
		}
	}
`;

export const DELETE_WORK = gql`
	mutation deleteWork($id: String!) {
		deleteWork(id: $id) {
			id
		}
	}
`;

export const GET_WORK_DETAIL = gql`
	query getWorkDetail($id: String!) {
		getWorkDetail(id: $id) {
			id
			title
			date
			descript
			images {
				id
				url
			}
		}
	}
`;
