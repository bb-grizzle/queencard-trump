interface Menu {
	id: string;
	href: string;
}

export const MENU: Menu[] = [
	{
		id: "work",
		href: "/"
	},
	{
		id: "about",
		href: "/about"
	},
	{
		id: "insperation",
		href: "/insperation"
	},
	{
		id: "contact",
		href: "/contact"
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
