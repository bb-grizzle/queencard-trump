import { CategoryDataProps } from "./category";
export interface PortfolioProps {
	category: CategoryDataProps;
	thumbnail: FileProps | null;
	subTitle: string;
	title: string;
	detail: PortfolioDetailProps;
	contents?: ContentsProps[];
}
export interface ContentsProps {
	title: string;
	image: FileProps[];
	text?: string;
	isSlider?: boolean;
}
export interface PortfolioDataProps extends PortfolioProps {
	id: string;
}

export interface FileProps {
	url: string;
	fileName: string;
	prevUrl?: string;
}

export interface PortfolioDetailProps {
	partner: string;
	business: string;
	count_student: number;
	count_school: number;
	area: string[];
	media: MediaProps;
	descript?: string;
}

export interface MediaProps {
	title: string;
	link: string;
}
