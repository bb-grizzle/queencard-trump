export const formCheck = (message?: string) => {
	alert(message ? message : "양식을 다 채웠는 지 확인해 주세요. 😀");
};

export const deleteConfirm = (message?: string) => {
	if (window.confirm(message ? message : "정말 삭제하실건가요? 🗑")) {
		return true;
	} else {
		return false;
	}
};

export const checkWebsite = (value: string) => {
	console.log(value);
	if (value) {
		if (!value.includes("http") && !value.includes("https")) {
			console.log("here?");
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
};

export default function inputPhoneNumber(value) {
	var number = value.replace(/[^0-9]/g, "");
	var phone = "";

	if (number.length < 4) {
		return number;
	} else if (number.length < 7) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3);
	} else if (number.length < 11) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 3);
		phone += "-";
		phone += number.substr(6);
	} else {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 4);
		phone += "-";
		phone += number.substr(7);
	}
	return phone;
}

export const checkEmail = (value) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(value).toLowerCase());
};
