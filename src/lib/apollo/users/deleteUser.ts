import { gql } from "@apollo/client";

export const deleteUserMutation = gql`
	mutation DeleteUser($id: Int!) {
		deleteUser(id: $id) {
			error
			ok
			user {
				id
			}
		}
	}
`;
