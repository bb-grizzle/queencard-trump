import { useEffect, useState } from "react";
import { fbGetData, fbUploadData, fbUploadStorage, fbUpdateData, fbDeleteStorage, fbDeleteData } from "../Firebase/firebase";
import useCategory from "./useCategory";
const COL = "portfolio";

const usePortfolio = () => {
	const { category, uploadCategory, updateCategory, categoryObj, setCateogoryCount, categoryCount, checkCategory } = useCategory();
	const [resData, setResData] = useState();
	const [data, setData] = useState();
	const [categoryResult, setCategoryResult] = useState();

	const [nowData, setNowData] = useState();

	useEffect(() => {
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

	const updatePortfolio = async (data, thumbnailInput) => {
		const id = nowData.id;
		let updateData = null;

		if (thumbnailInput.file) {
			const thumbnail = await fbUploadStorage(COL, id, thumbnailInput.file);
			updateData = { ...data, thumbnail };
			await fbUpdateData(COL, id, { ...data, thumbnail });
		} else {
			updateData = { ...data, thumbnail: nowData.thumbnail };
			await fbUpdateData(COL, id, { ...data, thumbnail: nowData.thumbnail });
		}

		// state
		setResData((prev) => prev.map((el) => (el.id === id ? { ...updateData, id } : el)));

		checkCategory(nowData.category.id, data.category);
	};

	const deletePortfolio = async () => {
		try {
			await fbDeleteStorage(nowData.thumbnail.prevUrl);
			await fbDeleteData(COL, nowData.id);

			// state
			setResData((prev) => prev.filter((el) => el.id !== nowData.id));

			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	};

	const handleNowData = (id: string | null) => {
		if (id === null) {
			setNowData(null);
		} else {
			data.some((el) => {
				if (el.id === id) {
					setNowData(el);
					return true;
				}
			});
		}
	};

	return { category: categoryResult, uploadCategory, updateCategory, categoryObj, data, setData, uploadPortfolio, handleNowData, nowData, updatePortfolio, deletePortfolio };
};

export default usePortfolio;
