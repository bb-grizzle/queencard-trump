import { gql } from "apollo-boost";

export const LOGIN_QUERY = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`;

export const LOCAL_LOGIN_QUERY = gql`
	mutation logUserIn($token: String!) {
		logUserIn(token: $token) @client
	}
`;

export const LOCAL_LOGOUT_QUERY = gql`
	mutation logUserOut {
		logUserOut @client
	}
`;

export const CHECK_TOKEN = gql`
	query checkToken {
		checkToken
	}
`;

export const ISLOGIN = gql`
	{
		isLoggedIn @client
	}
`;
