import { gql } from "@apollo/client";

export const getArticlesQuery = gql`
	query Query($take: Int, $skip: Int) {
		getArticles(take: $take, skip: $skip) {
			count
			data {
				id
				createdAt
				text
				title
				updatedAt
			}
		}
	}
`;
