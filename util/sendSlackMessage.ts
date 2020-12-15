import axios from "axios";

export const sendSlackMessage = async (message: string) => {
	try {
		const res = await axios({
			method: "post",
			url: `/api/slack`,
			headers: {
				"Content-Type": "application/json"
			},
			data: { message }
		});
		console.log("res : ", res);
		return res;
	} catch (err) {
		console.log(err);
	}
};
