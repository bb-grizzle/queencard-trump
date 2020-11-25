import { useState, useEffect } from "react";
import { fbGetData, fbUpdateData } from "../Firebase/firebase";

const COL = "about";

const useAbout = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "timeStamp", "desc");
			setData(res[0]);
		};
		get();
	}, []);

	const update = async (form, cont) => {
		try {
			const contents = await cont.update(COL);
			console.log({ ...form, contents });
			console.log();
			await fbUpdateData(COL, data.id, { ...form, contents });
			setData({ ...form, contents, id: data.id });
		} catch (err) {
			console.log(err);
		}
	};

	return { data, update };
};

export default useAbout;
