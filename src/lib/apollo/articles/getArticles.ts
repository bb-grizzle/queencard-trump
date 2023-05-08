import { gql } from "@apollo/client";

export const getArticlesQuery = gql`
	query Query($take: Int, $skip: Int) {
		getArticles(take: $take, skip: $skip) {
			id
			text
			title
			updatedAt
			createdAt
		}
	}
`;
