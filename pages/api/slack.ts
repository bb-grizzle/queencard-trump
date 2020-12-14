import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import Slack from "slack-node";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		return res.status(200).json({ page: "api/slack" });
	} else if (req.method === "POST") {
		const { message } = req.body;
		const webhookUri = process.env.NEXT_PUBLIC_SLACKURL;

		const slack = new Slack();
		slack.setWebhook(webhookUri);

		const send = async () => {
			return new Promise((res, rej) => {
				slack.webhook(
					{
						channel: process.env.NEXT_PUBLIC_SLACKCHANNEL, // 전송될 슬랙 채널
						username: "AwesomeSchool | WEB", //슬랙에 표시될 이름
						text: message
					},
					function(err, response) {
						if (err) {
							rej(err);
						} else if (response) {
							res(response);
						}
					}
				);
			});
		};

		try {
			await send();
			return res.status(200).end();
		} catch (err) {
			return res.status(405).end();
		}
	}

	return res.status(404).json({
		error: {
			code: "not_found",
			messgae: "The requested endpoint was not found or doesn't support this method."
		}
	});
};
