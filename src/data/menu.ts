import { ROUTER } from "@/router";
import { MenuType } from "@/types/menu";

export const DATA_MENU_USER: MenuType[] = [
	{
		text: "user",
		href: ROUTER.USER,
	},
	{
		text: "article",
		href: ROUTER.ARTICLE,
	},
];

export const DATA_MENU_ADMIN: MenuType[] = [
	{
		text: "user",
		href: ROUTER.ADMIN_USER,
	},
	{
		text: "article",
		href: ROUTER.ADMIN_ARTICLE,
	},
];
