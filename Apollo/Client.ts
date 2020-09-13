import { defaults, resolvers } from "./LocalState";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default new ApolloClient({
	uri: process.env.NODE_ENV === "development" ? "http://192.168.0.12:4000" : "https://seoseohee-server.herokuapp.com",
	cache: new InMemoryCache(),
	clientState: {
		resolvers,
		defaults
	},
	request: async (operation) => {
		const token = await localStorage.getItem("token");
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ""
			}
		});
	}
});
