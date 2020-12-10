import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		console.log(req.body);

		const { formData, file } = req.body;
		var transporter = nodemailer.createTransport(
			smtpTransport({
				service: "gmail",
				host: "smtp.gmail.com",
				auth: {
					user: "firbigi1993@gmail.com",
					pass: "Dbs279756*"
				}
			})
		);

		var mailOptions = {
			from: "firbigi1993@gmail.com",
			to: "firbigi1993@gmail.com",
			subject: `Awesome | ${formData.personalInfo.group}, ${formData.personalInfo.name}`,
			html: `
				<h3>기본정보</h3>
				<div>
					<p><strong>프로젝트의 종류 : </strong>${formData.type.join(", ")}</p>
				</div>
				<div>
					<p><strong>프로젝트 개요 : </strong>${formData.descript ? formData.descript : "-"}</p>
				</div>
				<div>
					<p><strong>어썸스쿨과 함께하려는 이유 : </strong>${formData.reason ? formData.reason : "-"}</p>
				</div>
				<div>
					<p><strong>정해진 예산 : </strong>${formData.budget ? formData.budget : "-"}</p>
				</div>
				<div>
					<p><strong>프로젝트 일정_범위 : </strong>${formData.dateChk ? formData.dateChk : "-"}</p>
				</div>
				<div>
					<p><strong>프로젝트 일정_날짜 : </strong>${formData.dateText ? formData.dateText : "-"}</p>
				</div>

				<hr />

				<h3>개인정보</h3>
				<section>
					<div>
						<p><strong>소속 조직명 </strong>: ${formData.personalInfo.group ? formData.personalInfo.group : "-"}</p>
					</div>
					<div>
						<p><strong>웹사이트</ </strong>: ${formData.personalInfo.website ? formData.personalInfo.website : "-"}</p>
					</div>
					<div>
						<p><strong>담당자 성함 </strong>: ${formData.personalInfo.name ? formData.personalInfo.name : "-"}</p>
					</div>
					<div>
						<p><strong>직함 </strong>: ${formData.personalInfo.role ? formData.personalInfo.role : "-"}</p>
					</div>
					<div>
						<p><strong>전화번호 </strong>: ${formData.personalInfo.number ? formData.personalInfo.number : "-"}</p>
					</div>
					<div>
						<p><strong>이메일 주소 </strong>: ${formData.personalInfo.email ? formData.personalInfo.email : "-"}</p>
					</div>
				</section>
			`,
			attachments: file ? [file] : undefined
		};

		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});

		return res.status(200).end();
	}
	return res.status(404).json({
		error: {
			code: "not_found",
			messgae: "The requested endpoint was not found or doesn't support this method."
		}
	});
};
