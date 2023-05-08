import { gql } from "@apollo/client";

export const getArticleQuery = gql`
	query Query($id: Int!) {
		getArticle(id: $id) {
			id
			title
			text
			thumbnail {
				url
				path
				name
				id
			}
		}
	}
`;
