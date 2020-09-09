import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";
import { defaults } from "./LocalState";
// import { endpoint, prodEndpoint } from '../config';

const uri = process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://seoseohee-server.herokuapp.com";

let apolloClient = null;

function create(initialState) {
	// Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
	const isBrowser = typeof window !== "undefined";
	return new ApolloClient({
		connectToDevTools: isBrowser,
		ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
		link: createHttpLink({
			uri, // Server URL (must be absolute)
			credentials: "include", // Additional fetch() options like `credentials` or `headers`
			// Use fetch() polyfill on the server
			fetch: !isBrowser && fetch
			// headers: initialState.headers,
		}),
		cache: new InMemoryCache()

		// cache: new InMemoryCache().restore(initialState || {}),
	});
}

function initApollo(initialState) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (typeof window === "undefined") {
		return create(initialState);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState);
	}

	return apolloClient;
}

export default withApollo(initApollo);
