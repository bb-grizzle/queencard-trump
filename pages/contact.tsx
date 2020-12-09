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
import { getFromGoogleSheet } from "../util/googleSpreadsheet";
import media from "../Styles/media";

const PageTitleWrapperCustome = styled(PageTitleWrapper)`
	margin-bottom: 118px;
	@media ${media.tablet} {
		margin-bottom: 64px;
	}
`;

const BtnSubmitCustome = styled(BtnSubmit)`
	background-color: ${(props) => props.theme.color.main};
	border-radius: 999px;
	color: white;
	padding: 15px 100px;
	display: inline-block;

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

	const [form, setForm] = useState();
	const [personalInfo, setPersonalInfo] = useState();

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

	useEffect(() => {
		const test = async () => {
			await getFromGoogleSheet();
		};
	}, []);

	const handleSubmit = async () => {
		console.log("handleSubmit");
		const newRow = { descript: "test" };
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
				<ContainerLayout>
					<ColWrapper>
						{!isTablet && <ColSidebar />}

						<ColContents>
							<PageTitleWrapperCustome handleBackClick={handleBackClick} title={""} subTitle={DATA_CONTACT.title} text={DATA_CONTACT.text.split("\n")} />

							<ContactForm>
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
									<PersonalInfoList {...personalNumberInput} label={"전화번호"} placeholder={"전화번호"} type={"tel"} />
									<PersonalInfoList {...personalEmailInput} label={"이메일 주소"} placeholder={"이메일 주소"} type={"email"} />
								</PersonalInfo>

								<CheckboxItem value={"agree"} name={"개인정보 수집, 이용 및 처리위탁 동의"} onChange={() => setAgree((prev) => !prev)} />

								<BtnSubmitCustome text={"신청하기"} onClick={handleSubmit} />
							</ContactForm>
						</ColContents>
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default Contact;
