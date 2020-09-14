export const checkBrowser = () => {
	var word;
	var versionOrType = "another";
	var ieName = navigator.appName;
	var agent = navigator.userAgent.toLowerCase();

	/*** 1. IE 버전 체크 ***/
	// IE old version ( IE 10 or Lower )
	if (ieName === "Microsoft Internet Explorer") {
		word = "msie ";
	} else {
		// IE 11
		if (agent.search("trident") > -1) word = "trident/.*rv:";
		// IE 12  ( Microsoft Edge )
		else if (agent.search("edge/") > -1) word = "edge/";
	}

	var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
	if (reg.exec(agent) !== null) versionOrType = RegExp.$1 + RegExp.$2;

	/*** 2. IE가 아닌 경우 브라우저 체크 ***/
	if (versionOrType === "another") {
		if (agent.indexOf("chrome") !== -1) versionOrType = "Chrome";
		else if (agent.indexOf("opera") !== -1) versionOrType = "Opera";
		else if (agent.indexOf("firefox") !== -1) versionOrType = "Firefox";
		else if (agent.indexOf("safari") !== -1) versionOrType = "Safari";
	}
	return versionOrType;
};
