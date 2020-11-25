import { useState, useEffect } from "react";
import { fbGetData, fbUploadData, fbUpdateData, fbUploadStorage } from "../Firebase/firebase";

const COL = "cover";
const useCover = () => {
	const [cover, setCover] = useState();
	const [id, setId] = useState();

	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "timeStamp", "desc");
			setId(res[0].id);
			setCover(res[0].image);
		};
		get();
	}, []);
	const update = async (fileInput) => {
		let image = null;
		if (fileInput.file) {
			image = await fbUploadStorage(COL, "cover", fileInput.file);
		}
		await fbUpdateData(COL, id, { image });
		setCover(image);
	};
	return { cover, update };
};

export default useCover;
