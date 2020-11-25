import { useState, useEffect } from "react";
import { fbGetData, fbUpdateData } from "../Firebase/firebase";
import { tutorDataProps } from "../Interface/tutor";

const COL = "tutor";
const useTutor = () => {
	const [data, setData] = useState<tutorDataProps>();

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
