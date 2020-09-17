import { defaults, resolvers } from "./LocalState";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default new ApolloClient({
	// uri: process.env.NODE_ENV === "development" ? "http://192.168.35.5:4000" : "https://seoseohee-backend.herokuapp.com/",
	uri: "https://seoseohee-backend.herokuapp.com/",
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
