import { useState, useEffect } from "react";
import { fbGetData, fbUpdateData } from "../Firebase/firebase";
import { aboutDataProps } from "../Interface/about";

const COL = "about";

const useAbout = () => {
	const [data, setData] = useState<aboutDataProps>();
	const [id, setId] = useState("");
	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "timeStamp", "desc");
			setId(res[0].id);
			setData(res[0]);
		};
		get();
	}, []);

	const update = async (form, cont) => {
		try {
			const contents = await cont.update(COL);
			await fbUpdateData(COL, id, { ...form, contents });
			setData({ ...form, contents, id });
		} catch (err) {
			console.log(err);
		}
	};

	return { data, update };
};

export default useAbout;
