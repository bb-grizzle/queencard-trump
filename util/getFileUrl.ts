export const getDataUrl = async (file) => {
	const url = new Promise((resolve, reject) => {
		// test
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = function(error) {
			reject(`Error: ${error}`);
		};
	});
	return url;
};
