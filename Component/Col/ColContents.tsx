import styled from "styled-components";
import ColDefault from "./ColDefault";
import { MutableRefObject, useEffect } from "react";
import useSize from "../../Hook/useSize";
import media from "../../Styles/media";
import useCol from "../../Hook/useCol";
import { usePortfolioData, useCategoryData, useSearchValue } from "../../Context/AppProvider";
import PortfolioList from "../PortfolioList";
import useElementSize from "../../Hook/useElementSize";
import { PortfolioDataProps } from "../../Interface/portfolio";
import Paragraph from "../Text/Paragraph";
import theme from "../../Styles/theme";
import { useRouter } from "next/router";

interface ColContentsProps {
	refElement?: MutableRefObject<HTMLDivElement>;
}

const ColWrapper = styled(ColDefault)`
	@media ${media.tablet} {
		min-height: initial;
	}
`;

const PortfolioWrapper = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const ColContents: React.FC<ColContentsProps> = ({ children }) => {
	const { isTablet } = useSize();
	const { col } = useCol({ pc: 3, tablet: 3, mobile: 2 });
	const { portfolio: data, setNowPortfolio } = usePortfolioData();
	const { nowCategory, setNowCategory } = useCategoryData();
	const { ref, size } = useElementSize();
	const { push, pathname } = useRouter();
	const { search, setSearch } = useSearchValue();

	useEffect(() => {
		setSearch(null);
	}, [pathname]);

	const handleListClick = (data: PortfolioDataProps) => {
		push(`/portfolio/[id]`, `/portfolio/${data.id}`);
		setNowPortfolio(data);
	};

	return (
		<ColWrapper col={!isTablet ? 75 : 100} refElement={ref}>
			{!!children ? (
				search !== null ? (
					<PortfolioWrapper>
						{data !== undefined && data.length > 0 ? (
							data.map((portfolio, index) => {
								return (
									<PortfolioList
										overlay={nowCategory ? nowCategory.includes(portfolio.category.id) : false}
										key={portfolio.id}
										data={portfolio}
										col={col}
										isLast={(index + 1) % col === 0}
										onClick={() => handleListClick(portfolio)}
										parentSize={size}
									/>
								);
							})
						) : (
							<Paragraph text={"0건의 관련 프로젝트가 있습니다. "} color={theme.color.gray.dark} />
						)}
					</PortfolioWrapper>
				) : (
					children
				)
			) : (
				<PortfolioWrapper>
					{data !== undefined && data.length > 0 ? (
						data.map((portfolio, index) => {
							return (
								<PortfolioList
									overlay={nowCategory ? nowCategory.includes(portfolio.category.id) : false}
									key={portfolio.id}
									data={portfolio}
									col={col}
									isLast={(index + 1) % col === 0}
									onClick={() => handleListClick(portfolio)}
									parentSize={size}
								/>
							);
						})
					) : (
						<Paragraph text={"0건의 관련 프로젝트가 있습니다. "} color={theme.color.gray.dark} />
					)}
				</PortfolioWrapper>
			)}
		</ColWrapper>
	);
};

export default ColContents;
