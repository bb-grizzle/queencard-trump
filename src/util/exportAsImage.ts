import domtoimage from "dom-to-image";

const exportAsImage = async (element: any, imageFileName: string) => {
	domtoimage.toPng(element).then(function (dataUrl) {
		downloadImage(dataUrl, imageFileName);
	});
};

const downloadImage = (blob: string, fileName: string) => {
	const fakeLink = document.createElement("a");
	fakeLink.style.display = "none";
	fakeLink.download = fileName;
	fakeLink.href = blob;

	document.body.appendChild(fakeLink);
	fakeLink.click();
	document.body.removeChild(fakeLink);

	fakeLink.remove();
};

export default exportAsImage;
