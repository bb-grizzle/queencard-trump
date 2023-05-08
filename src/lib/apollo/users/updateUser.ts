import { gql } from "@apollo/client";

export const updateUserMutation = gql`
	mutation UpdateUser($id: Int!, $name: String) {
		updateUser(id: $id, name: $name) {
			user {
				createdAt
				email
				id
				name
				updatedAt
			}
			ok
			error
		}
	}
`;
