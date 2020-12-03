import PageContainer from "../../Layout/PageLayout";
import ContentsWrapper from "../../Component/ContentsWrapper";
import ContainerLayout from "../../Layout/ContainerLayout";
import ColWrapper from "../../Component/Col/ColWrapper";
import ColSidebar from "../../Component/Col/ColSidebar";
import CategoryWrapper from "../../Component/Category/CategoryWrapper";
import ColContents from "../../Component/Col/ColContents";
import BtnIcon from "../../Component/Btn/BtnIcon";
import Title from "../../Component/Text/Title";
import { usePortfolioData, useCategoryData } from "../../Context/AppProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Paragraph from "../../Component/Text/Paragraph";
import Link from "next/link";
import DetailList from "../../Component/DetailList";

const BtnWrapper = styled.div`
	margin-bottom: 32px;
`;
const TitleWrapper = styled.div`
	margin-bottom: 244px;
	color: ${(props) => props.theme.color.gray.dark};
`;
const InfoWrapper = styled.div`
	display: flex;
	margin-bottom: 140px;
	color: ${(props) => props.theme.color.gray.dark};
`;
const ColInfo = styled.div`
	width: 50%;
`;
const RowInfo = styled.div`
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`;

const ColInfoDescript = styled(ColInfo)`
	font-size: 13px;
	color: ${(props) => props.theme.color.gray.dark};

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
			setNowCategory(nowPortfolio.category.id);
			console.log(nowPortfolio);
		}
	}, [nowPortfolio]);

	const handleBackClick = () => {
		setNowCategory(null);
		push("/");
	};

	return (
		<PageContainer>
			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						<ColSidebar>
							<CategoryWrapper />
						</ColSidebar>

						{nowPortfolio && (
							<ColContents>
								<BtnWrapper>
									<BtnIcon icon={"arrow_left"} onClick={handleBackClick} />
								</BtnWrapper>

								<TitleWrapper>
									<Title title={nowPortfolio.title} isRegular={true} />
									<Title title={nowPortfolio.subTitle} />
								</TitleWrapper>

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
											<Paragraph text={nowPortfolio.detail.area.join(", ")} />
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
											return <DetailList title={el.title} key={index} image={el.image} />;
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
