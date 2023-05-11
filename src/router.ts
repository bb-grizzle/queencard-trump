const ROUTER_USER = {
	HOME: "/",
	USER: "/user",
	ARTICLE: "/article",
};

const ROUTER_ADMIN = {
	ADMIN: "/_admin",
	ADMIN_ARTICLE: `/_admin${ROUTER_USER.ARTICLE}`,
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

	// ADMIN
	...ROUTER_ADMIN,

	// SHARED
	...ROUTER_SHARED,
};
