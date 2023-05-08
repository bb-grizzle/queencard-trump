import { gql } from "@apollo/client";

export const getUsersQUery = gql`
	query getUsers {
		getUsers {
			id
			email
			name
			createdAt
			updatedAt
		}
	}
`;
