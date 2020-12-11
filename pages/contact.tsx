import PageContainer from "../Layout/PageLayout";
import { useEffect, useState } from "react";
import { useLoading } from "../Context/AppProvider";
import ContentsWrapper from "../Component/ContentsWrapper";
import ContainerLayout from "../Layout/ContainerLayout";
import ColWrapper from "../Component/Col/ColWrapper";
import useSize from "../Hook/useSize";
import ColSidebar from "../Component/Col/ColSidebar";
import ColContents from "../Component/Col/ColContents";
import styled from "styled-components";
import PageTitleWrapper from "../Component/PageTitleWrapper";
import { useRouter } from "next/router";
import {
	DATA_CONTACT,
	DATA_FORM_PROJECT_SELECT,
	options_project,
	DATA_FORM_PROJECT_DESCRIPT,
	DATA_FORM_REASON,
	DATA_FORM_BUDGET,
	DATA_FORM_DATE_CHECKBOX,
	DATA_FORM_DATE_TEXT,
	DATA_FORM_FILE
} from "../Data/contact";
import InputCheckbox from "../Component/Input/InputCheckbox";
import useInputOption from "../Hook/useInputOption";
import useInputCheckbox from "../Hook/useInputCheckbox";
import TextArea from "../Component/Input/TextArea";
import useInput from "../Hook/useInput";
import InputRadio from "../Component/Input/InputRadio";
import InputDefault from "../Component/Input/InputDefault";
import useInputFile from "../Hook/useInputFile";
import InputFile from "../Component/Input/InputFile";
import CheckboxItem from "../Component/Input/CheckboxItem";
import BtnSubmit from "../Component/Btn/BtnSubmit";
import media from "../Styles/media";
import Popup from "../Component/Popup";
import useElementSize from "../Hook/useElementSize";
import { sendEmail } from "../util/sendEmail";
import { fbUploadStorage, fbDeleteStorage } from "../Firebase/firebase";
import { formCheck, checkWebsite, checkEmail } from "../util/formCheck";

const PageTitleWrapperCustome = styled(PageTitleWrapper)`
	margin-bottom: 118px;
	@media ${media.tablet} {
		margin-bottom: 64px;
	}
`;
const BtnWrapper = styled.div`
	text-align: center;
`;

const BtnSubmitCustome = styled(BtnSubmit)`
	background-color: ${(props) => props.theme.color.main};
	border-radius: 999px;
	color: white;
	padding: 15px 100px;
	display: inline-block;
	width: 270px;

	@media ${media.tablet} {
		padding: 15px 0;
		width: 100%;
	}
`;

const ContactForm = styled.form`
	/* text-align: center; */
	> .Inputlayout {
		padding-bottom: 64px;

		@media ${media.tablet} {
			padding-bottom: 32px;
		}
	}
`;

const PersonalInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 77px;

	@media ${media.tablet} {
		margin-bottom: 32px;
	}
`;

const PersonalInfoList = styled(InputDefault)`
	width: calc(50% - 4px);
	&:nth-child(2n-1) {
		margin-right: 4px;
	}
	&:nth-child(2n) {
		margin-left: 4px;
	}

	@media ${media.tablet} {
		width: 100%;
		&:nth-child(2n-1) {
			margin-right: 0px;
		}
		&:nth-child(2n) {
			margin-left: 0px;
		}
	}
`;
const Contact = () => {
	const { setLoading } = useLoading();
	const { isTablet } = useSize();
	const { push } = useRouter();

	// Form

	const projectTypeInput = useInputCheckbox({ initOption: options_project });
	const projectDescriptInput = useInput("");
	const projectReasonInput = useInput("");
	const projectBudgetInput = useInputOption("");
	const projectDateChkInput = useInputOption("");
	const projectDateTextInput = useInput("");
	const projectFileInput = useInputFile();

	const personalGroupInput = useInput("");
	const personalWebsiteInput = useInput("");
	const personalNameInput = useInput("");
	const personalRoleInput = useInput("");
	const personalNumberInput = useInput("");
	const personalEmailInput = useInput("");

	const [agree, setAgree] = useState(false);

	const [form, setForm] = useState({});
	const [personalInfo, setPersonalInfo] = useState({});

	const { ref, size } = useElementSize();
	const [popupActive, setPopupActive] = useState(false);

	useEffect(() => {
		// return formInit();
	}, []);

	useEffect(() => {
		setForm({
			type: projectTypeInput.value,
			descript: projectDescriptInput.value,
			reason: projectReasonInput.value,
			budget: projectBudgetInput.value,
			dateChk: projectDateChkInput.value,
			dateText: projectDateTextInput.value,
			file: null,
			personalInfo,
			agree
		});
		// console.log(form);
	}, [agree, personalInfo, projectTypeInput.value, projectDescriptInput.value, projectReasonInput.value, projectBudgetInput.value, projectDateChkInput.value, projectDateTextInput.value]);

	useEffect(() => {
		setPersonalInfo({
			group: personalGroupInput.value,
			website: personalWebsiteInput.value,
			name: personalNameInput.value,
			role: personalRoleInput.value,
			number: personalNumberInput.value,
			email: personalEmailInput.value
		});
	}, [personalGroupInput.value, personalWebsiteInput.value, personalNameInput.value, personalRoleInput.value, personalNumberInput.value, personalEmailInput.value]);

	const handleSubmit = async () => {
		// if (projectTypeInput.value.lenght === 0 || !projectDescriptInput.value || !projectReasonInput.value || !projectBudgetInput.value || !projectDateChkInput.value || !projectDateTextInput.value) {
		// 	formCheck();
		// 	return;
		// }

		// if (!personalGroupInput.value || !personalNameInput.value || !personalRoleInput.value || !personalNumberInput.value || !personalEmailInput.value) {
		// 	formCheck();
		// 	return;
		// }

		// if (!agree) {
		// 	formCheck();
		// 	return;
		// }

		// // validation
		// if (!checkWebsite(personalWebsiteInput.value)) {
		// 	formCheck("웹사이트를 다시 확인해 주세요. 🌎");
		// 	return;
		// } else if (!checkEmail(personalEmailInput.value)) {
		// 	formCheck("이메일 양식을 다시 확인해 주세요. ✉️");
		// 	return;
		// }

		try {
			// setLoading(true);
			const file = projectFileInput.file ? await fbUploadStorage("contact", `${Date.now()}_${projectFileInput.fileName}`, projectFileInput.file) : "";
			const res = await sendEmail({
				formData: form,
				file: file ? { path: file.url, filename: file.fileName } : "",
				auth: {
					user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
					pass: process.env.NEXT_PUBLIC_GMAIL_PW
				}
			});

			setPopupActive(true);

			setTimeout(async () => {
				setPopupActive(false);

				if (res.status === 200 && file) {
					fbDeleteStorage(file.prevUrl);
				}

				// formInit();
				push("/");
			}, 1500);
		} catch (err) {
			console.log(err);
		} finally {
		}
	};

	const formInit = () => {
		projectTypeInput.init();
		projectDescriptInput.init();
		projectReasonInput.init();
		projectBudgetInput.init();
		projectDateChkInput.init();
		// projectDateTextInput.init();
		projectFileInput.init();
		personalGroupInput.init();
		personalWebsiteInput.init();
		personalNameInput.init();
		personalRoleInput.init();
		personalNumberInput.init();
		personalEmailInput.init();
		setAgree(false);
		setForm({});
		setPersonalInfo({});
		setPopupActive(false);
	};

	useEffect(() => {
		setLoading(false);
	}, []);
	const handleBackClick = () => {
		push("/");
	};
	return (
		<PageContainer>
			<ContentsWrapper>
				<ContainerLayout containerRef={ref}>
					<ColWrapper>
						{!isTablet && <ColSidebar />}

						<ColContents>
							<PageTitleWrapperCustome handleBackClick={handleBackClick} title={""} subTitle={DATA_CONTACT.title} text={DATA_CONTACT.text.split("\n")} />

							<ContactForm onSubmit={handleSubmit}>
								<InputCheckbox {...projectTypeInput} {...DATA_FORM_PROJECT_SELECT} />
								<TextArea {...projectDescriptInput} {...DATA_FORM_PROJECT_DESCRIPT} />
								<TextArea {...projectReasonInput} {...DATA_FORM_REASON} />
								<InputRadio {...projectBudgetInput} {...DATA_FORM_BUDGET} />
								<InputRadio {...projectDateChkInput} {...DATA_FORM_DATE_CHECKBOX} />
								<InputDefault {...projectDateTextInput} {...DATA_FORM_DATE_TEXT} fontsize={13} type={"date"} />
								<InputFile {...projectFileInput} {...DATA_FORM_FILE} />

								<PersonalInfo>
									<PersonalInfoList {...personalGroupInput} label={"소속 조직명"} placeholder={"소속 조직명"} />
									<PersonalInfoList {...personalWebsiteInput} label={"웹사이트"} placeholder={"웹사이트"} />
									<PersonalInfoList {...personalNameInput} label={"담당자 성함"} placeholder={"담당자 성함"} />
									<PersonalInfoList {...personalRoleInput} label={"직함"} placeholder={"직함"} />
									<PersonalInfoList {...personalNumberInput} label={"전화번호"} placeholder={"전화번호"} type={"tel"} maxLength={13} />
									<PersonalInfoList {...personalEmailInput} label={"이메일 주소"} placeholder={"이메일 주소"} type={"email"} />
								</PersonalInfo>

								<CheckboxItem value={"agree"} name={"개인정보 수집, 이용 및 처리위탁 동의"} onChange={() => setAgree((prev) => !prev)} />

								<BtnWrapper>
									<BtnSubmitCustome text={"신청하기"} onClick={handleSubmit} />
								</BtnWrapper>
							</ContactForm>

							<Popup parentSize={size} active={popupActive} />
						</ColContents>
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default Contact;
