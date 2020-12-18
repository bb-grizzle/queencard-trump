interface Menu {
	id: string;
	href: string;
	name?: string;
}

export const MENU: Menu[] = [
	{
		id: "portfolio",
		href: "/",
		name: "포트폴리오"
	},
	{
		id: "about",
		href: "/about",
		name: "회사소개"
	},
	{
		id: "process",
		href: "/process",
		name: "사업과정"
	},
	{
		id: "tutor",
		href: "/tutor",
		name: "코치소개"
	}
];

export const MENU_ADMIN: Menu[] = [
	{
		id: "admin_home",
		href: "/_admin/home",
		name: "홈"
	},
	{
		id: "admin_portfolio",
		href: "/_admin/portfolio",
		name: "포트폴리오"
	},
	{
		id: "admin_about",
		href: "/_admin/about",
		name: "회사소개"
	},
	{
		id: "admin_tutor",
		href: "/_admin/tutor",
		name: "강사소개"
	}
];
