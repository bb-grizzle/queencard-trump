import PageContainer from "../../Layout/PageLayout";
import ContentsWrapper from "../../Component/ContentsWrapper";
import ContainerLayout from "../../Layout/ContainerLayout";
import ColWrapper from "../../Component/Col/ColWrapper";
import ColSidebar from "../../Component/Col/ColSidebar";
import CategoryWrapper from "../../Component/Category/CategoryWrapper";
import ColContents from "../../Component/Col/ColContents";
import { usePortfolioData, useCategoryData, useLoading } from "../../Context/AppProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../../Component/Text/Paragraph";
import Link from "next/link";
import DetailList from "../../Component/DetailList";
import useSize from "../../Hook/useSize";
import media from "../../Styles/media";
import PageTitleWrapper from "../../Component/PageTitleWrapper";
import Intersection from "../../Component/Intersection";

const InfoWrapper = styled(Intersection)`
	display: flex;
	margin-bottom: 125px;
	color: ${(props) => props.theme.color.gray.dark};

	@media ${media.tablet} {
		flex-direction: column;
		margin-bottom: 80px;
	}
`;
const ColInfo = styled.div`
	width: 50%;

	@media ${media.tablet} {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid ${(props) => props.theme.color.gray.light};
	}
`;
const RowInfo = styled.div`
	&:not(:last-child) {
		margin-bottom: 20px;
	}
	@media ${media.tablet} {
		width: 50%;
		margin-bottom: 16px;

		&:last-child,
		&:nth-last-child(2) {
			margin-bottom: 0;
		}
	}
`;

const ColInfoDescript = styled(ColInfo)`
	font-size: 13px;
	color: ${(props) => props.theme.color.gray.dark};

	line-height: 1.68;

	a {
		color: ${(props) => props.theme.color.link};
	}
`;
const DetailContentsWrapper = styled.ul``;

const portfolio = () => {
	const { nowPortfolio, portfolio, setNowPortfolio } = usePortfolioData();
	const { setNowCategory } = useCategoryData();
	const {
		query: { id },
		push
	} = useRouter();
	const { isTablet } = useSize();
	const { setLoading } = useLoading();

	useEffect(() => {
		// Direct link open
		if (id && nowPortfolio === undefined && Array.isArray(portfolio) && portfolio.length > 0) {
			portfolio.some((el) => {
				if (id === el.id) {
					setNowPortfolio(el);
					return true;
				}
			});
		}
	}, [id, nowPortfolio, portfolio]);

	useEffect(() => {
		if (nowPortfolio) {
			// LOADING DONE
			setLoading(false);
		}
	}, [nowPortfolio]);

	const handleBackClick = () => {
		setNowCategory(null);
		push("/");
	};

	return (
		<PageContainer loading={!!nowPortfolio}>
			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						{!isTablet && <ColSidebar hide={true} />}

						{nowPortfolio && (
							<ColContents>
								<PageTitleWrapper handleBackClick={handleBackClick} title={nowPortfolio.title} subTitle={nowPortfolio.subTitle} />

								<InfoWrapper>
									<ColInfo>
										{/* partner */}
										<RowInfo>
											<Paragraph bold={true} text={"파트너"} />
											<Paragraph text={nowPortfolio.detail.partner} />
										</RowInfo>
										{/* business */}
										<RowInfo>
											<Paragraph bold={true} text={"사업명"} />
											<Paragraph text={nowPortfolio.detail.business} />
										</RowInfo>
										{/* student count */}
										<RowInfo>
											<Paragraph bold={true} text={"참여학생"} />
											<Paragraph text={`${nowPortfolio.detail.count_student}명`} />
										</RowInfo>
										{/* school count */}
										<RowInfo>
											<Paragraph bold={true} text={"참여학교"} />
											<Paragraph text={`${nowPortfolio.detail.count_school}개`} />
										</RowInfo>
										{/* area */}
										<RowInfo>
											<Paragraph bold={true} text={"참여지역"} />
											<Paragraph text={nowPortfolio.detail.area.length > 0 ? nowPortfolio.detail.area.join(", ") : "-"} />
										</RowInfo>
										{/* media */}
										<RowInfo>
											<Paragraph bold={true} text={"언론보도"} />
											<Link href={nowPortfolio.detail.media.link}>
												<a>
													<Paragraph text={`"${nowPortfolio.detail.media.title}"`} />
												</a>
											</Link>
										</RowInfo>
									</ColInfo>
									<ColInfoDescript dangerouslySetInnerHTML={{ __html: nowPortfolio.detail.descript }} />
								</InfoWrapper>

								<DetailContentsWrapper>
									{nowPortfolio.contents &&
										nowPortfolio.contents.map((el, index) => {
											return <DetailList title={el.title} key={index} image={el.image} isSlider={el.isSlider} />;
										})}
								</DetailContentsWrapper>
							</ColContents>
						)}
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default portfolio;
