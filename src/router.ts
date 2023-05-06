const ROUTER_USER = {
	HOME: "/",
	TEST_1: "/test1",
	TEST_2: "/test2",
	TEST_3: "/test3",
};

const ROUTER_ADMIN = {
	ADMIN: "/_admin",
	ADMIN_TEST_1: `/_admin/${ROUTER_USER.TEST_1}`,
	ADMIN_TEST_2: `/_admin/${ROUTER_USER.TEST_2}`,
	ADMIN_TEST_3: `/_admin/${ROUTER_USER.TEST_3}`,
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
