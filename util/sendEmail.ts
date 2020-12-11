import axios from "axios";
import { headData } from "../Data/head";

export const sendEmail = async ({ formData, file, auth }) => {
	try {
		const res = await axios({
			method: "post",
			url: `${headData.url}/api/sendmail`,
			headers: {
				"Content-Type": "application/json"
			},
			data: { formData, file, auth }
		});
		return res;
	} catch (err) {
		console.dir(err);
	}
};
