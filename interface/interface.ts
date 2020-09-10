export enum TextLang {
	KR,
	EN
}

export interface AdminFormContents {
	value?: string;
	onChange: any;
	label: string;
	type?: string;
	placeholder?: string;
	files?: any[];
	onThumbnailClick?: any;
}

export interface WorkData {
	id: string;
	title: string;
	images: Image[];
	date: string;
	descript: string;
}

export interface Image {
	id: string;
	url: string;
}

export interface ExhibitionData {
	id: string;
	title: string;
	gallery: string;
	date: string;
	location: string;
	link: string;
	descript: string;
	images: Image[];
}
