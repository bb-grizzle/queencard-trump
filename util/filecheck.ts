function checkFile(el) {
	// kb setting
	var file = el.file;

	if (file && file[0] && file[0].size > 1024 * 1024 * 1) {
		alert("1MB 이하 파일만 업로드 할 수 있습니다.\n\n" + "현재파일 용량 : " + Math.round((file[0].size / 1024 / 1024) * 100) / 100 + "MB");
		return false;
	} else return true;
}

export default checkFile;
