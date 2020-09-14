export const defaults = {
	// isLoggedIn: Boolean(localStorage.getItem("token")) !== null ? true : false
	isLoggedIn: null
};

export const resolvers = {
	Mutation: {
		logUserIn: (_, { token }, { cache }) => {
			localStorage.setItem("token", token);
			cache.writeData({
				data: {
					isLoggedIn: true
				}
			});
			return null;
		},
		logUserOut: () => {
			localStorage.removeItem("token");
			window.location.reload();
			return null;
		}
	}
};
