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
import { usePortfolioData, useCategoryData, useLoading } from "../Context/AppProvider";
import useImageLoad from "../Hook/useImageLoad";

const Cover = styled.div<{ image: string; active: boolean }>`
	${(props) => props.theme.layout.ratio(34)};
	${(props) => (props.image ? props.theme.layout.full_image(`${props.image}`) : "")};

	${(props) => props.theme.transition.load(props.active)};
`;

const Portfolio = () => {
	const { portfolio: data, setNowPortfolio } = usePortfolioData();
	const { category, nowCategory, setNowCategory } = useCategoryData();
	const { cover } = useCover();
	const { push } = useRouter();

	const { ref, size } = useElementSize();
	const { setLoading } = useLoading();
	const { load, setUrl } = useImageLoad(null);

	useEffect(() => {
		if (data && cover && category) {
			setUrl(cover.url);
		}
	}, [data, cover, category]);

	useEffect(() => {
		if (load) {
			setLoading(false);
		}
	}, [load]);

	return (
		<PageContainer>
			<Cover image={cover ? cover.url : null} active={load} />

			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						<ColSidebar>
							<CategoryWrapper />
						</ColSidebar>
						<ColContents />
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default Portfolio;
