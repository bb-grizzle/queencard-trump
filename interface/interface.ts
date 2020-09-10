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
	files?: File[] | File;
	onThumbnailClick?: any;
	isOneImage?: boolean;
}

export interface File {
	file: any;
	url: string;
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

export interface InsperationData {
	id: string;
	title: string;
	thumbnail: Image;
}

export enum InfoFeild {
	EDUCATION,
	EXHIBITION,
	AWARD
}

export interface InfoData {
	id: string;
	year: number;
	field: InfoFeild;
	text: string;
	priority: number;
}
