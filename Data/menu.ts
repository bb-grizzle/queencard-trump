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
		name: "강사소개"
	}
];

export const MENU_ADMIN: Menu[] = [
	{
		id: "about",
		href: "/_admin/about"
	},
	{
		id: "work",
		href: "/_admin/work"
	},
	{
		id: "exhibition",
		href: "/_admin/exhibition"
	},
	{
		id: "insperation",
		href: "/_admin/insperation"
	}
];
