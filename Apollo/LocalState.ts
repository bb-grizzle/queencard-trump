export const defaults = {
	isLoggedIn: false
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
			console.log("log user in");
			localStorage.removeItem("token");
			return null;
		}
	}
};
