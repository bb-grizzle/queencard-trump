import PageContainer from "../Layout/PageLayout";
import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import useCover from "../Hook/useCover";
import { useEffect } from "react";
import ColWrapper from "../Component/Col/ColWrapper";
import ColSidebar from "../Component/Col/ColSidebar";
import ColContents from "../Component/Col/ColContents";
import ContentsWrapper from "../Component/ContentsWrapper";
import CategoryWrapper from "../Component/Category/CategoryWrapper";
import { usePortfolioData, useCategoryData, useLoading } from "../Context/AppProvider";
import useImageLoad from "../Hook/useImageLoad";
import media from "../Styles/media";

const CoverWrapper = styled.div`
	height: ${(props) => `${props.theme.size.cover.pc}px`};
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${media.tablet} {
		height: ${(props) => `${props.theme.size.cover.tablet}px`};
	}

	@media ${media.mobile} {
		height: ${(props) => `${props.theme.size.cover.mobile}px`};
	}
`;

const Cover = styled.img<{ active: boolean }>`
	height: 100%;

	${(props) => props.theme.transition.load(props.active)};
	background-repeat: no-repeat;
`;

const Portfolio = () => {
	const { portfolio: data } = usePortfolioData();
	const { category } = useCategoryData();
	const { cover } = useCover();
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
		<PageContainer loading={!!cover}>
			<CoverWrapper>
				<Cover src={cover ? cover.url : null} active={load} />
			</CoverWrapper>

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
