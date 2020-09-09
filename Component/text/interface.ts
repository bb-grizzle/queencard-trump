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
