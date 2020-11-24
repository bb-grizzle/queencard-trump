import { CategoryDataProps } from "./category";
export interface PortfolioProps {
	category: CategoryDataProps;
	thumbnail: fileProps | null;
	subTitle: string;
	title: string;
	detail: PortfolioDetailProps;
	contents?: PortfolioContentsProps[];
}
export interface PortfolioContentsProps {
	title: string;
	image: fileProps | null;
}
export interface PortfolioDataProps extends PortfolioProps {
	id: string;
}

export interface fileProps {
	url: string;
	fileName: string;
	prevUrl: string;
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
