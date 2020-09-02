export const defaults = {
	isLoggedIn: false
};

export const resolvers = {
	Mutation: {
		Mutation: {
			logUserIn: (_, { token }, { cache }) => {}
		}
	}
};
