interface Menu {
	id: string;
	href: string;
	name?: string;
}

export const MENU: Menu[] = [
	// {
	// 	id: "portfolio",
	// 	href: "/",
	// 	name: "포트폴리오"
	// },
];

export const MENU_ADMIN: Menu[] = [
	{
		id: "admin_home",
		href: "/_admin/home",
		name: "홈",
	},
];
