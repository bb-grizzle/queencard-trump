import { useState, useEffect } from "react";
import { fbGetData, fbUpdateData, fbUploadData } from "../Firebase/firebase";

const COL = "tutor";
const useTutor = () => {
	const [data, setData] = useState();

	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "timeStamp", "desc");
			setData(res[0]);
		};
		get();
	}, []);

	const update = async (form) => {
		try {
			await fbUpdateData(COL, data.id, form);
		} catch (err) {
			console.log(err);
		}
	};

	return { data, update };
};

export default useTutor;
