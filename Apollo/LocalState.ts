export const defaults = {
	// isLoggedIn: Boolean(localStorage.getItem("token")) !== null ? true : false
	isLoggedIn: null
};

export const resolvers = {
	Mutation: {
		logUserIn: (_, { token }, { cache }) => {
			console.log("log user in");
			localStorage.setItem("token", token);
			cache.writeData({
				data: {
					isLoggedIn: true
				}
			});
			return null;
		},
		logUserOut: () => {
			console.log("log user out");
			localStorage.removeItem("token");
			window.location.reload();
			return null;
		}
	}
};
