import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import Slack from "slack-node";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		return res.status(200).json({ page: "api/slack" });
	} else if (req.method === "POST") {
		const { message } = req.body;

		const slack = new Slack(process.env.NEXT_PUBLIC_SLACK_TOKEN);

		const send = async () => {
			return new Promise((res, rej) => {
				// slack.webhook(
				// 	{
				// 		channel: process.env.NEXT_PUBLIC_SLACKCHANNEL, // 전송될 슬랙 채널
				// 		username: "AwesomeSchool | WEB", //슬랙에 표시될 이름
				// 		text: message
				// 	},
				// 	function(err, response) {
				// 		if (err) {
				// 			rej(err);
				// 		} else if (response) {
				// 			res(response);
				// 		}
				// 	}
				// );

				slack.api(
					"chat.postMessage",
					{
						username: "partner알림봇", // 슬랙에 표시될 봇이름
						text: message,
						channel: process.env.NEXT_PUBLIC_SLACKCHANNEL // 전송될 채널 및 유저
					},
					function(err, response) {
						if (err) {
							console.log(err);
							rej(err);
						} else {
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
			console.log(err);
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
