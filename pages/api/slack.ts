import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import Slack from "slack-node";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		return res.status(200).json({ page: "api/slack" });
	} else if (req.method === "POST") {
		const webhookUri = "https://hooks.slack.com/services/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";

		const slack = new Slack();
		slack.setWebhook(webhookUri);
		const send = async (message) => {
			slack.webhook(
				{
					channel: "#test", // 전송될 슬랙 채널
					username: "webhookbot", //슬랙에 표시될 이름
					text: message
				},
				function(err, response) {
					console.log(response);
				}
			);
		};

		await send("test");
		return res.status(200).end();
	}

	return res.status(404).json({
		error: {
			code: "not_found",
			messgae: "The requested endpoint was not found or doesn't support this method."
		}
	});
};
