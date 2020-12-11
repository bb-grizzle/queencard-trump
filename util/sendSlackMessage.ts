import axios from "axios";

export const sendSlackMessage = async () => {
	try {
		const res = await axios({
			method: "post",
			url: `/api/slack`,
			headers: {
				"Content-Type": "application/json"
			}
			// data: {  }
		});
		console.log(res);
		return res;
	} catch (err) {
		console.dir(err);
	}
};
