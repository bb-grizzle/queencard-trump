import ApolloClient, { InMemoryCache } from "apollo-boost";

export default new ApolloClient({
	uri: process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://seoseohee-server.herokuapp.com",
	cache: new InMemoryCache()
});
