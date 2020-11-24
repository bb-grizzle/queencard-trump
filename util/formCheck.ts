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
