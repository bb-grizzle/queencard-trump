import { gql } from "apollo-boost";
export const GET_WORK = gql`
	query {
		getWork {
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

export const UPLOAD_WORK = gql`
	mutation uploadWork($date: String!, $title: String!, $descript: String!, $images: [String!]!) {
		uploadWork(date: $date, title: $title, descript: $descript, images: $images) {
			id
			date
			descript
			images {
				id
				url
			}
			title
		}
	}
`;

export const UPDATE_WORK = gql`
	mutation updateWork($id: String!, $title: String, $date: String, $descript: String, $deleteImage: [String!], $addImages: [String!]) {
		updateWork(id: $id, title: $title, date: $date, descript: $descript, deleteImage: $deleteImage, addImages: $addImages) {
			id
			date
			descript
			images {
				id
				url
			}
			title
		}
	}
`;
