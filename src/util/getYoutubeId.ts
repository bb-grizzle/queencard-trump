export const getYoutubeId = (url) => {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	var match = url.match(regExp);
	return match && match[7].length == 11 ? match[7] : false;
};

export const getYoutubeSize = async (id) => {
	const res = await fetch(`https://noembed.com/embed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${id}`);
	const size = await res.json();

	return size;
};
