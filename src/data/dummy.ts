const DATA_DUM_ADMIN_LIST = {
	id: 1,
	title: "title",
	author: "author",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
};

export const DATA_DUM_ADMIN_LISTS: (typeof DATA_DUM_ADMIN_LIST)[] = new Array(10).fill("").map((el, index) => {
	return { ...DATA_DUM_ADMIN_LIST, id: index + 1, title: `${DATA_DUM_ADMIN_LIST.title} ${index + 1}` };
});
