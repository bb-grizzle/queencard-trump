const ROUTER_USER = {
	HOME: "/",
	RESULT: "/result",
};

const ROUTER_SHARED = {
	SHARED: "/_shared",
	SHARED_ICON: "/_shared/icon",
	SHARED_INPUT: "/_shared/input",
	SHARED_BUTTON: "/_shared/button",
	SHARED_ADMIN: "/_shared/admin",
};

export const ROUTER = {
	...ROUTER_USER,

	// SHARED
	...ROUTER_SHARED,
};
