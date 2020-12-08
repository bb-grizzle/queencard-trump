import PageContainer from "../Layout/PageLayout";
import useAbout from "../Hook/useAbout";
import ContentsWrapper from "../Component/ContentsWrapper";
import ContainerLayout from "../Layout/ContainerLayout";
import ColWrapper from "../Component/Col/ColWrapper";
import useSize from "../Hook/useSize";
import ColSidebar from "../Component/Col/ColSidebar";
import ColContents from "../Component/Col/ColContents";
import PageTitleWrapper from "../Component/PageTitleWrapper";
import { useEffect, useState } from "react";
import { useLoading } from "../Context/AppProvider";
import SectionWrapper from "../Component/SectionWrapper";
import styled from "styled-components";
import Title, { TitleType } from "../Component/Text/Title";
import Paragraph, { ParagraphType } from "../Component/Text/Paragraph";
import { DATA_ABOUT } from "../Data/about";
import BackgroundImage from "../Component/BackgroundImage";
import DetailList from "../Component/DetailList";
import media from "../Styles/media";
import { useRouter } from "next/router";

// VISION
const VisionSectionWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 200px;

	@media ${media.tablet} {
		margin-bottom: 64px;
	}

	@media ${media.mobile} {
		flex-direction: column;
	}
`;
const VisionSectionItem = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 55px;
	text-align: center;
	align-items: center;
	@media ${media.tablet} {
		padding: 0 24px;
		flex-shrink: 0;
		width: 50%;
	}
	@media ${media.mobile} {
		width: 100%;

		&:first-child {
			margin-bottom: 32px;
		}
	}
`;

const ImageWrapper = styled.div<{ color: string }>`
	${(props) => props.theme.layout.ratio(100)}
	width: 270px;
	max-width: 100%;
	background-color: ${(props) => props.color};
	border-radius: 100%;
	position: relative;
	overflow: hidden;
	color: ${(props) => props.theme.color.white};

	@media ${media.desktop} {
		width: 240px;
	}

	@media ${media.tablet} {
		width: 100%;
		max-width: 180px;
	}
`;
const VisionTitle = styled(Title)`
	position: absolute;
	top: 17%;
	width: 100%;
`;

const VisionImageText = styled(Paragraph)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	font-size: 22px;
`;

const VisionText = styled(Paragraph)`
	margin-top: 37px;
	color: ${(props) => props.theme.color.gray.dark};
	@media ${media.tablet} {
		margin-top: 16px;
	}
`;

// VALUE
const ValueSectionWrapper = styled.ul`
	display: flex;
	align-items: flex-start;

	@media ${media.mobile} {
		flex-direction: column;
	}
`;

const ValueSectionItem = styled.li`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 20px;
	color: ${(props) => props.theme.color.gray.dark};
	width: calc(100% / 3);
	flex-shrink: 0;

	&:first-child {
		padding-left: 0;
	}
	&:last-child {
		padding-right: 0;
	}

	@media ${media.mobile} {
		width: 100%;
		margin-bottom: 32px;
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
const ValueImage = styled.div`
	width: 140px;
	height: 140px;
	position: relative;

	@media ${media.mobile} {
		width: 50%;
		max-width: 180px;
		${(props) => props.theme.layout.ratio(100)};
		height: initial;
		flex-shrink: 0;
	}
`;

const ValueTextWrapper = styled.div`
	margin-top: 29px;
	@media ${media.mobile} {
		margin-top: 0px;
		padding: 16px;
	}
`;
const ValueTitle = styled(Title)`
	margin-bottom: 27px;

	@media ${media.mobile} {
		margin-bottom: 8px;
	}
`;
const ValueSubtitle = styled(Paragraph)`
	margin-bottom: 30px;
	@media ${media.mobile} {
		margin-bottom: 16px;
	}
`;
const ValueText = styled(Paragraph)``;

const index = () => {
	const { data } = useAbout();
	const { isTablet } = useSize();
	const { setLoading } = useLoading();
	const { push } = useRouter();

	useEffect(() => {
		if (data) {
			console.log(data);
			setLoading(false);
		}
	}, [data]);

	const handleBackClick = () => {
		console.log("handleBackClick");
		push("/");
	};

	return (
		<PageContainer>
			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						{!isTablet && <ColSidebar />}

						{data && (
							<ColContents>
								<PageTitleWrapper handleBackClick={handleBackClick} title={"ABOUT AWESOME"} subTitle={"어썸스쿨이 그리는 세상 "} />
								{/* VISION & MISSION */}
								<VisionSectionWrapper>
									{DATA_ABOUT.vmision.map((el, index) => {
										return (
											<VisionSectionItem key={index}>
												<ImageWrapper color={el.color}>
													<BackgroundImage image={el.image} opacity={0.2} />
													<VisionTitle title={el.id} type={TitleType.SM} />
													<VisionImageText text={el.title} />
												</ImageWrapper>
												<VisionText text={el.text} type={ParagraphType.SM} />
											</VisionSectionItem>
										);
									})}
								</VisionSectionWrapper>

								{/* VALUE */}
								<SectionWrapper title="IN AWESOME WAY" subTitle="어썸스쿨이 이뤄내는 방식 ">
									<ValueSectionWrapper>
										{DATA_ABOUT.values.map((el, index) => {
											return (
												<ValueSectionItem key={index}>
													<ValueImage>
														<BackgroundImage image={`${el.image}`} />
													</ValueImage>
													<ValueTextWrapper>
														<ValueTitle title={el.title} />
														<ValueSubtitle text={el.subTitle} size={13} bold={true} />
														<ValueText text={el.text} size={13} />
													</ValueTextWrapper>
												</ValueSectionItem>
											);
										})}
									</ValueSectionWrapper>
								</SectionWrapper>

								{/* CONTENTS */}
								<SectionWrapper title={data.title.split("\n")[0]} subTitle={data.title.split("\n")[1]} isLast={true}>
									{data.contents.map((el, index) => {
										return <DetailList key={index} {...el} image={el.image} number={index + 1} />;
									})}
								</SectionWrapper>
							</ColContents>
						)}
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default index;
