import { gql } from "apollo-boost";
export const DELETE_IMAGE = gql`
	mutation deleteImage($id: String!) {
		deleteImage(id: $id) {
			id
		}
	}
`;

export const UPLOAD_IMAGES = gql`
	mutation uploadImage($urls: [String!]!) {
		uploadImage(urls: $urls) {
			id
		}
	}
`;

export const UPDATE_IMAGE = gql`
	mutation updateImage($ids: [String!]!, $urls: [String!]!) {
		updateImage(ids: $ids, urls: $urls) {
			id
			url
		}
	}
`;
