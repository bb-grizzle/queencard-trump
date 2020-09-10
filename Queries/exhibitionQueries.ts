import { gql } from "apollo-boost";
export const GET_EXHIBITION = gql`
	{
		getExhibition {
			id
			title
			gallery
			date
			location
			link
			descript
			images {
				id
				url
			}
		}
	}
`;

export const UPDATE_EXHIBITION = gql`
	mutation updateExhibition($id: String!, $title: String, $date: String, $gallery: String, $location: String, $link: String, $descript: String, $deleteImage: [String!], $addImages: [String!]) {
		updateExhibition(id: $id, title: $title, date: $date, gallery: $gallery, location: $location, link: $link, descript: $descript, deleteImage: $deleteImage, addImages: $addImages) {
			id
			title
			gallery
			date
			location
			link
			descript
			images {
				id
				url
			}
		}
	}
`;

export const UPLOAD_EXHIBITION = gql`
	mutation updateExhibition($title: String!, $gallery: String!, $date: String!, $location: String!, $link: String, $descript: String!, $images: [String!]!) {
		uploadExhibition(title: $title, gallery: $gallery, date: $date, location: $location, link: $link, descript: $descript, images: $images) {
			id
			title
			gallery
			date
			location
			link
			descript
			images {
				id
				url
			}
		}
	}
`;

export const DELETE_EXHIBITION = gql`
	mutation deleteExhibition($id: String!) {
		deleteExhibition(id: $id) {
			id
		}
	}
`;
