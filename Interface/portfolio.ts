import { CategoryDataProps } from "./category";
export interface PortfolioProps {
	category: CategoryDataProps;
	thumbnail: fileProps | null;
	subTitle: string;
	title: string;
	detail: PortfolioDetailProps;
}

export interface PortfolioDataProps extends PortfolioProps {
	id: string;
}

export interface fileProps {
	url: string;
	prevUrl: string;
}

export interface PortfolioDetailProps {
	partner: string;
	business: string;
	count_student: number;
	count_school: number;
	area: string[];
	media: MediaProps;
}

export interface MediaProps {
	title: string;
	link: string;
}
