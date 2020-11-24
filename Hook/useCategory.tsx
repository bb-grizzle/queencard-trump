import { useEffect, useState } from "react";
import { fbGetData, fbUploadData, fbUpdateData, fbDeleteData } from "../Firebase/firebase";
import { formCheck } from "../util/formCheck";
const COL = "category";

export interface categoryProps {
	name: string;
	count: number;
}
const useCategory = () => {
	const [category, setCategory] = useState();
	const [categoryObj, setCategoryObj] = useState();
	const [categoryCount, setCateogoryCount] = useState();

	useEffect(() => {
		const get = async () => {
			try {
				const res = await fbGetData(COL, "name", "asc");
				setCategory(res);
			} catch (err) {
				console.log(err);
			}
		};
		get();
	}, []);

	useEffect(() => {
		if (category !== undefined) {
			const obj = {};
			category.forEach((el) => {
				obj[el.id] = el;
			});
			setCategoryObj(obj);
		}
	}, [category]);

	const uploadCategory = async (data) => {
		const isExist = category.some((el) => el.name === data.name);
		if (!isExist) {
			const id = await fbUploadData(COL, data);
			setCategory((prev) => [{ id, ...data }, ...prev]);

			return id;
		} else {
			formCheck("이미 존재하는 카태고리 입니다. 😟");
			return false;
		}
	};

	const updateCategory = async (id, data) => {
		try {
			await fbUpdateData(COL, id, data);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteCategory = async (id: string) => {
		try {
			await fbDeleteData(COL, id);
			setCategory((prev) => prev.filter((el) => el.id !== id));
		} catch (err) {
			console.log(err);
		}
	};

	const checkCategory = async (prevId, nowId) => {
		if (categoryCount[prevId] === 1 && prevId !== nowId) {
			await deleteCategory(prevId);
		}
	};

	return { category, setCategory, uploadCategory, updateCategory, categoryObj, setCateogoryCount, categoryCount, checkCategory };
};

export default useCategory;
