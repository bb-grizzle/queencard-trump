import { useEffect, useState } from "react";
import { fbGetData, fbUploadData, fbUploadStorage, fbUpdateData } from "../Firebase/firebase";
import useCategory from "./useCategory";
const COL = "portfolio";

const usePortfolio = () => {
	const { category, setCategory, uploadCategory, updateCategory, categoryObj, setCateogoryCount, categoryCount } = useCategory();
	const [resData, setResData] = useState();
	const [data, setData] = useState();
	const [categoryResult, setCategoryResult] = useState();

	useEffect(() => {
		console.log("GET PORTFOLIO");
		const get = async () => {
			try {
				const res = await fbGetData(COL, "timeStamp", "desc");
				setResData(res);
			} catch (err) {
				console.log(err);
			}
		};
		get();
	}, []);

	useEffect(() => {
		if (resData && categoryObj) {
			const categoryCount_temp = {};
			const filtered = resData.map((el) => {
				categoryCount_temp[el.category] = categoryCount_temp[el.category] ? categoryCount_temp[el.category] + 1 : 1;
				return { ...el, category: categoryObj[el.category] };
			});
			setData(filtered);
			setCateogoryCount(categoryCount_temp);
		}
	}, [resData, categoryObj]);

	useEffect(() => {
		if (data && categoryObj) {
			const categoryCount_temp = {};
			data.forEach((el) => {
				const id = el.category.id;
				categoryCount_temp[id] = categoryCount_temp[id] ? categoryCount_temp[id] + 1 : 1;
			});
			setCateogoryCount(categoryCount_temp);
		}
	}, [data, categoryObj]);

	useEffect(() => {
		// result of category data
		if (category && categoryCount) {
			setCategoryResult(category.map((el) => ({ ...el, count: categoryCount[el.id] })));
		}
	}, [category, categoryCount]);

	const uploadPortfolio = async (data, thumbnailInput) => {
		try {
			const id = await fbUploadData(COL, { ...data });
			const thumbnail = await fbUploadStorage(COL, id, thumbnailInput.file);
			await fbUpdateData(COL, id, { ...data, thumbnail });

			// state
			setResData((prev) => [{ ...data, thumbnail, id }, ...prev]);

			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	};

	return { category: categoryResult, uploadCategory, updateCategory, categoryObj, data, setData, uploadPortfolio };
};

export default usePortfolio;
