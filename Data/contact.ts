import { ContactFormProps, ContactFormType, ContactFormTextProps, ContactFormOptionProps } from "./../Interface/contact";
import { optionProps } from "../Interface/input";
export const DATA_CONTACT = {
	title: "프로젝트 문의하기",
	text: `관심있는 교육 프로그램을 알려주시면
  메일을 통해 수업 기획안과 견적서를 발송해드립니다
  
  학교에서 주로 신청하시는 기본 프로그램(진로/기업가정신/트렌트/인공지능)은  
  ‘히어로스쿨’ 홈페이지 <a href='http://hero-school.net' target = '_blank'>http://hero-school.net</a>에서 확인 및 신청하실 수 있습니다.`
};

export const options_project: optionProps[] = [
	{
		name: "진로",
		value: "진로",
		group: "project"
	},
	{
		name: "기업가정신",
		value: "기업가정신",
		group: "project"
	},
	{
		name: "창업",
		value: "창업",
		group: "project"
	},
	{
		name: "창작",
		value: "창작",
		group: "project"
	},
	{
		name: "리더십",
		value: "리더십",
		group: "project"
	},
	{
		name: "문화예술",
		value: "문화예술",
		group: "project"
	},
	{
		name: "게임",
		value: "게임",
		group: "project"
	},
	{
		name: "미디어",
		value: "미디어",
		group: "project"
	},
	{
		name: "디지털 리터러시",
		value: "디지털 리터러시",
		group: "project"
	},
	{
		name: "환경",
		value: "환경",
		group: "project"
	},
	{
		name: "기타",
		value: "기타",
		group: "project"
	}
];

export const options_budget: optionProps[] = [
	{
		name: "500만원 미만",
		value: "500만원 미만",
		group: "budget"
	},
	{
		name: "500~1,000만원",
		value: "500~1,000만원",
		group: "budget"
	},
	{
		name: "1,000~2,000만원",
		value: "1,000~2,000만원",
		group: "budget"
	},
	{
		name: "2,000~3,000만원",
		value: "2,000~3,000만원",
		group: "budget"
	},
	{
		name: "3,000~5,000만원",
		value: "3,000~5,000만원",
		group: "budget"
	},
	{
		name: "1억~3억원",
		value: "1억~3억원",
		group: "budget"
	},
	{
		name: "3억원 초과",
		value: "3억원 초과",
		group: "budget"
	},
	{
		name: "기타",
		value: "기타",
		group: "budget"
	}
];

export const options_date: optionProps[] = [
	{
		name: "바로 착수",
		value: "바로 착수",
		group: "date"
	},
	{
		name: "여유가 있습니다.(오늘로 2~30일 후)",
		value: "여유가 있습니다.(오늘로 2~30일 후)",
		group: "date"
	},
	{
		name: "조정 가능합니다.",
		value: "조정 가능합니다.",
		group: "date"
	},
	{
		name: "정해진 일정은 따로 없어요.",
		value: "정해진 일정은 따로 없어요.",
		group: "date"
	}
];

export const DATA_FORM_PROJECT_SELECT: ContactFormOptionProps = {
	label: "관심있는 프로젝트의 종류를 선택해주세요.",
	caption: "다중선택 가능",
	type: ContactFormType.CHECKBOX,
	option: options_project
};
export const DATA_FORM_PROJECT_DESCRIPT: ContactFormTextProps = {
	label: "프로젝트 개요를 설명해주세요.",
	type: ContactFormType.TEXTAREA,
	placeholder: "프로젝트 개요"
};
export const DATA_FORM_REASON: ContactFormTextProps = {
	label: "감사합니다! 어썸스쿨과 함께하려는 이유를 설명해주시겠어요?",
	type: ContactFormType.TEXTAREA,
	placeholder: "어썸스쿨과 함께하려는 이유"
};
export const DATA_FORM_BUDGET: ContactFormOptionProps = {
	label: "정해진 예산이 있으신가요?",
	type: ContactFormType.RADIO,
	option: options_budget
};
export const DATA_FORM_DATE_CHECKBOX: ContactFormOptionProps = {
	label: "프로젝트 일정은 언제로 생각하시나요?",
	type: ContactFormType.RADIO,
	option: options_date
};
export const DATA_FORM_DATE_TEXT: ContactFormTextProps = {
	label: "프로젝트 일정은 언제로 생각하시나요?",
	placeholder: "0000-00-00",
	type: ContactFormType.TEXT
};

export const DATA_FORM_FILE: ContactFormProps = {
	label: "첨부파일",
	type: ContactFormType.FILE
};
