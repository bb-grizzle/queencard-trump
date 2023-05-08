import { gql } from "@apollo/client";

export const createUserMutaion = gql`
	mutation CreateUser($email: String!, $password: String!) {
		createUser(email: $email, password: $password) {
			ok
			error
			user {
				id
				email
				updatedAt
				createdAt
			}
		}
	}
`;
