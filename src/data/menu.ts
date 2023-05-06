import { ROUTER } from "@/router";
import { MenuType } from "@/types/menu";

export const DATA_MENU_USER: MenuType[] = [
	{
		text: "test1",
		href: ROUTER.TEST_1,
	},
	{
		text: "test2",
		href: ROUTER.TEST_2,
	},
	{
		text: "test3",
		href: ROUTER.TEST_3,
	},
];

export const DATA_MENU_ADMIN: MenuType[] = [
	{
		text: "test1",
		href: ROUTER.ADMIN_TEST_1,
	},
	{
		text: "test2",
		href: ROUTER.ADMIN_TEST_2,
	},
	{
		text: "test3",
		href: ROUTER.ADMIN_TEST_3,
	},
];
