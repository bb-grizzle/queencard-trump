import { createContext, useState, useContext, useEffect, SetStateAction, Dispatch } from "react";
import useSize from "../Hook/useSize";
import { preventScroll, activeScroll } from "../util/preventScroll";
import { useRouter } from "next/router";
import { fbAuthListener } from "../Firebase/firebase";
import usePortfolio from "../Hook/usePortfolio";
import { PortfolioDataProps } from "../Interface/portfolio";
import { CategoryDataProps } from "../Interface/category";
import { checkBrowser } from "../util/checkBrowser";

interface AppContextProps {
	globalLoading: boolean;
	setGlobalLoading: Dispatch<SetStateAction<boolean>>;
	isMenuClick: boolean;
	setIsMenuClick: Dispatch<SetStateAction<boolean>>;
	isAdmin: boolean;
	isLoggedIn: boolean;
	setIsLoggedInt: Dispatch<SetStateAction<boolean | null>>;
	portfolio: PortfolioDataProps[];
	category: CategoryDataProps[];
	nowCategory: string[] | null;
	setNowCategory: Dispatch<SetStateAction<string[]>>;
	nowPortfolio: PortfolioDataProps;
	setNowPortfolio: Dispatch<SetStateAction<PortfolioDataProps>>;
	setSearch: Dispatch<SetStateAction<string>>;
	search: string;
	isIe: boolean;
}

export const AppContext = createContext({} as AppContextProps);

const AppProvider = ({ children }) => {
	const [globalLoading, setGlobalLoading] = useState(false);
	const [isMenuClick, setIsMenuClick] = useState(false);
	const { isTablet } = useSize();
	const router = useRouter();
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoggedIn, setIsLoggedInt] = useState(null);
	const [isIe, setIsIe] = useState(false);

	// category and portfolio
	const { data: portfolio, category } = usePortfolio();
	const [nowCategory, setNowCategory] = useState<string[]>([]);

	const [nowPortfolio, setNowPortfolio] = useState<PortfolioDataProps>();

	// search
	const [search, setSearch] = useState<string | null>(null);

	useEffect(() => {
		const result = checkBrowser();
		if (result === "11.0" || result === "10.0" || result === "9.0") {
			setIsIe(true);
		} else {
			setIsIe(false);
		}
	}, []);

	useEffect(() => {
		fbAuthListener(setIsLoggedInt);
	}, []);

	// make ismenuclick false when media changed
	useEffect(() => {
		setIsMenuClick(false);
	}, [isTablet]);

	// prevent scroll when ismenuclick is true
	useEffect(() => {
		if (isMenuClick) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [isMenuClick]);

	useEffect(() => {
		if (router.pathname.includes("_admin")) {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	}, [router]);

	useEffect(() => {
		setNowCategory([]);
	}, [router.pathname]);

	return (
		<AppContext.Provider
			value={{
				nowPortfolio,
				setNowPortfolio,
				nowCategory,
				setNowCategory,
				globalLoading,
				setGlobalLoading,
				isMenuClick,
				setIsMenuClick,
				isAdmin,
				isLoggedIn,
				setIsLoggedInt,
				portfolio,
				category,
				setSearch,
				search,
				isIe
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useLoading = () => {
	const loading = useContext(AppContext).globalLoading;
	const setLoading = useContext(AppContext).setGlobalLoading;

	return { loading, setLoading };
};

export const useIsMenuClick = () => {
	const isMenuClick = useContext(AppContext).isMenuClick;
	const setIsMenuClick = useContext(AppContext).setIsMenuClick;

	return { isMenuClick, setIsMenuClick };
};

export const useIsAdmin = () => {
	const isAdmin = useContext(AppContext).isAdmin;
	return { isAdmin };
};

export const useIsLoggedIn = () => {
	const isLoggedIn = useContext(AppContext).isLoggedIn;
	const setIsLoggedInt = useContext(AppContext).setIsLoggedInt;
	const { push } = useRouter();

	const redirectToLogin = () => {
		if (isLoggedIn === false) {
			push("/_admin/signin");
		}
	};

	return { isLoggedIn, setIsLoggedInt, redirectToLogin };
};

export const usePortfolioData = () => {
	const { portfolio, nowPortfolio, setNowPortfolio, search } = useContext(AppContext);

	return { portfolio: !!search ? portfolio.filter((el) => el.title.includes(search) || el.subTitle.includes(search)) : portfolio, nowPortfolio, setNowPortfolio };
};

export const useCategoryData = () => {
	const { category, nowCategory, setNowCategory } = useContext(AppContext);
	useEffect(() => {
		console.log("nowCategory : ", nowCategory);
	}, [nowCategory]);
	return { category, nowCategory, setNowCategory };
};

export const useSearchValue = () => {
	const { setSearch, search } = useContext(AppContext);
	return { setSearch, search };
};

export const useIsIe = () => {
	const { isIe } = useContext(AppContext);
	return { isIe };
};

export default AppProvider;
