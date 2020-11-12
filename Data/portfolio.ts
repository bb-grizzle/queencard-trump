export interface PortfolioProps {
	category: string;
	thumbnail: string;
	subTitle: string;
	title: string;
	detail: PortfolioDetailProps;
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

export const DATA_PORTFOLIO_DETAIL: PortfolioProps = {
	category: "글로벌",
	thumbnail: "",
	subTitle: "",
	title: "",
	detail: {
		partner: "",
		business: "",
		count_student: 10,
		count_school: 14,
		area: ["test", "test", "test3"],
		media: {
			title: "media title",
			link: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%84%B1%EC%88%98+%EC%83%A4%EB%B8%8C%EC%83%A4%EB%B8%8C"
		}
	}
};

export interface CategoryProps {
	id: string;
	category: string;
	color: string;
}

export const DATA_PORTFOLIO_CATEGORY: CategoryProps = {
	id: "testest",
	category: "글로벌",
	color: "black"
};

export const DATA_CATEOGRY_ARR: CategoryProps[] = [DATA_PORTFOLIO_CATEGORY, DATA_PORTFOLIO_CATEGORY, DATA_PORTFOLIO_CATEGORY, DATA_PORTFOLIO_CATEGORY];

export const DATA_PORTFOLIO_ARR = [];
