import PageContainer from "../Layout/PageLayout";
import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import useCover from "../Hook/useCover";
import { useEffect } from "react";
import ColWrapper from "../Component/Col/ColWrapper";
import ColSidebar from "../Component/Col/ColSidebar";
import ColContents from "../Component/Col/ColContents";
import { useRouter } from "next/router";
import PortfolioList from "../Component/PortfolioList";
import useCol from "../Hook/useCol";
import useElementSize from "../Hook/useElementSize";
import { PortfolioDataProps } from "../Interface/portfolio";
import ContentsWrapper from "../Component/ContentsWrapper";
import CategoryWrapper from "../Component/Category/CategoryWrapper";
import { usePortfolioData, useCategoryData } from "../Context/AppProvider";

const Cover = styled.div<{ image: string }>`
	${(props) => props.theme.layout.ratio(34)};
	${(props) => props.theme.layout.full_image(`${props.image}`)};
	background-attachment: fixed;
`;

const PortfolioWrapper = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const Portfolio = () => {
	const { portfolio: data, setNowPortfolio } = usePortfolioData();
	const { category, nowCategory, setNowCategory } = useCategoryData();
	const { cover } = useCover();
	const { push } = useRouter();
	const { col } = useCol({ pc: 3, tablet: 3, mobile: 2 });
	const { ref, size } = useElementSize();

	useEffect(() => {
		if (data && cover && category) {
			// loading done
			// console.log(data);
			// console.log(cover);
			// console.log(category);
		}
	}, [data, cover, category]);

	const handleListClick = (data: PortfolioDataProps) => {
		push(`/portfolio/[id]`, `/portfolio/${data.id}`);
		setNowCategory(data.category.id);
		setNowPortfolio(data);
	};

	return (
		<PageContainer>
			{cover && <Cover image={cover.url} />}

			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						<ColSidebar>
							<CategoryWrapper />
						</ColSidebar>
						<ColContents refElement={ref}>
							<PortfolioWrapper>
								{data !== undefined &&
									data.map((portfolio, index) => {
										return (
											<PortfolioList
												overlay={portfolio.category.id === nowCategory}
												key={portfolio.id}
												data={portfolio}
												col={col}
												isLast={(index + 1) % col === 0}
												onClick={() => handleListClick(portfolio)}
												parentSize={size}
											/>
										);
									})}
							</PortfolioWrapper>
						</ColContents>
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default Portfolio;
