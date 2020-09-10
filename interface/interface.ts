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
