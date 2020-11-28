import PageContainer from "../Layout/PageLayout";
import styled, { css } from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import usePortfolio from "../Hook/usePortfolio";
import useCover from "../Hook/useCover";
import useEditor from "../Hook/useEditor";
import { useEffect } from "react";
import ColDefault from "../Component/Col/ColDefault";
import ColWrapper from "../Component/Col/ColWrapper";
import ColSidebar from "../Component/Col/ColSidebar";
import ColContents from "../Component/Col/ColContents";
import Numbering from "../Component/Numbering";
import Paragraph, { ParagraphType } from "../Component/Text/Paragraph";
import { useRouter } from "next/router";
import PortfolioList from "../Component/PortfolioList";
import useCol from "../Hook/useCol";
import useElementSize from "../Hook/useElementSize";

const Cover = styled.div<{ image: string }>`
	${(props) => props.theme.layout.ratio(34)};
	${(props) => props.theme.layout.full_image(`${props.image}`)};
`;

const Contents = styled.div`
	margin-top: ${(props) => props.theme.size.padding_top_contents.pc};
`;

const CategoryWrapper = styled.ul`
	margin-bottom: 16px;
`;

const CategoryText = styled(Paragraph)`
	margin-right: 4px;
`;

const CategoryCount = styled(Numbering)``;
const CategoryList = styled.li<{ active: boolean | null }>`
	display: flex;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
	cursor: pointer;
	${(props) =>
		props.active === false &&
		css`
			${CategoryText} {
				color: ${(props) => props.theme.color.disable};
			}
			${CategoryCount} {
				background-color: ${(props) => props.theme.color.disable};
			}
		`};
`;

const PortfolioWrapper = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const CustomePortfolioList = styled(PortfolioList)<{ active: boolean }>`
	${(props) =>
		props.active === false &&
		css`
			display: none;
		`};
`;

const Portfolio = () => {
	const { data, category } = usePortfolio();
	const { cover } = useCover();
	const {
		query: { category: nowCategory },
		push
	} = useRouter();
	const { col } = useCol({ pc: 3, tablet: 3, mobile: 2 });
	const { ref, size } = useElementSize();

	useEffect(() => {
		if (data && cover && category) {
			// console.log(data);
			// console.log(cover);
			// console.log(category);
		}
	}, [data, cover, category]);

	useEffect(() => {
		console.log(nowCategory);
	}, [nowCategory]);

	const handleCategoryClick = (id: string) => {
		push(`?category=${id}`);
	};

	const handleListClick = () => {
		console.log("handleListClick");
	};

	return (
		<PageContainer>
			{cover && <Cover image={cover.url} />}

			<Contents>
				<ContainerLayout>
					<ColWrapper>
						<ColSidebar>
							<CategoryWrapper>
								{category &&
									category.map((el) => {
										return (
											<CategoryList onClick={() => handleCategoryClick(el.id)} key={el.id} active={nowCategory !== undefined ? el.id === nowCategory : null}>
												<CategoryText text={el.name} type={ParagraphType.LG} color={el.color} />
												<CategoryCount number={el.count} small={true} color={el.color} />
											</CategoryList>
										);
									})}
							</CategoryWrapper>
						</ColSidebar>
						<ColContents refElement={ref}>
							<PortfolioWrapper>
								{data !== undefined &&
									data.map((portfolio, index) => {
										console.log(portfolio);
										return (
											<PortfolioList
												// active={nowCategory === portfolio.category.id || nowCategory !== null}
												key={portfolio.id}
												data={portfolio}
												col={col}
												isLast={(index + 1) % col === 0}
												onClick={handleListClick}
												parentSize={size}
											/>
										);
									})}
							</PortfolioWrapper>
						</ColContents>
					</ColWrapper>
				</ContainerLayout>
			</Contents>
		</PageContainer>
	);
};

export default Portfolio;
