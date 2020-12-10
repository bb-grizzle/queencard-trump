import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../util/sendgrid";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const { file } = req.body;

		console.log(file);
		// await sendEmail(attachment);
		return res.status(200).end();
	}
	return res.status(404).json({
		error: {
			code: "not_found",
			messgae: "The requested endpoint was not found or doesn't support this method."
		}
	});
};
