import axios from "axios";

export const sendEmail = async ({ formData, file }) => {
	console.log(file);
	try {
		const res = await axios({
			method: "post",
			url: "/api/sendEmail",
			headers: {
				"Content-Type": "application/json"
			},
			data: { formData, file }
		});
		return res;
	} catch (err) {
		console.dir(err);
	}
};
