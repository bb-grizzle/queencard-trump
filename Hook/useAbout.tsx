import { useState, useEffect } from "react";
import { fbGetData, fbUpdateData, fbUploadData } from "../Firebase/firebase";
import { aboutDataProps } from "../Interface/about";

const COL = "about";

const useAbout = () => {
	const [data, setData] = useState<aboutDataProps>();
	const [id, setId] = useState("");
	useEffect(() => {
		const get = async () => {
			try {
				const res = await fbGetData(COL, "timeStamp", "desc");
				if (!!res && Array.isArray(res) && res.length > 0) {
					setId(res[0].id);
					setData(res[0]);
				}
			} catch (err) {
				console.log(err);
			}
		};
		get();
	}, []);

	const update = async (form, cont) => {
		try {
			// upload
			// const contents = await cont.upload(COL);
			// await fbUploadData(COL, { ...form, contents });

			// UPDATE
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
