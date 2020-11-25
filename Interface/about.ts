import { ContentsProps } from "./portfolio";
export interface aboutDataProps extends aboutProps {
	id: string;
}

export interface aboutProps {
	title: string;
	contents: ContentsProps[];
}
