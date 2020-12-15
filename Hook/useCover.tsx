import { useState, useEffect } from "react";
import { fbGetData, fbUpdateData, fbUploadStorage, fbUploadData } from "../Firebase/firebase";
import { FileProps } from "../Interface/portfolio";

const COL = "cover";
const useCover = () => {
	const [cover, setCover] = useState<FileProps | null>();
	const [id, setId] = useState();

	useEffect(() => {
		const get = async () => {
			try {
				const res = await fbGetData(COL, "timeStamp", "desc");
				if (res) {
					setId(res[0].id);
					setCover(res[0].image);
				}
			} catch (err) {
				console.log(err);
			}
		};
		get();
	}, []);
	const update = async (fileInput) => {
		let image = null;
		if (fileInput.file) {
			image = await fbUploadStorage(COL, "cover", fileInput.file);
		}
		await fbUpdateData(COL, id, { image });
		// await fbUploadData(COL, { image });
		setCover(image);
	};
	return { cover, update };
};

export default useCover;
