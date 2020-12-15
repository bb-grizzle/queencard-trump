import PageContainer from "../Layout/PageLayout";
import ContentsWrapper from "../Component/ContentsWrapper";
import ContainerLayout from "../Layout/ContainerLayout";
import ColWrapper from "../Component/Col/ColWrapper";
import ColSidebar from "../Component/Col/ColSidebar";
import useSize from "../Hook/useSize";
import ColContents from "../Component/Col/ColContents";
import PageTitleWrapper from "../Component/PageTitleWrapper";
import { useEffect } from "react";
import { useLoading } from "../Context/AppProvider";
import SectionWrapper from "../Component/SectionWrapper";
import styled from "styled-components";
import { DATA_PROCESS } from "../Data/process";
import media from "../Styles/media";
import ImageSlider from "../Component/ImageSlider";
import Paragraph from "../Component/Text/Paragraph";
import ProcessList from "../Component/Process/ProcessList";
import { useRouter } from "next/router";
import Intersection from "../Component/Intersection";

const ProcessWrapper = styled.ul`
	margin-bottom: 125px;

	@media ${media.tablet} {
		margin-bottom: 64px;
	}
`;

const DescritWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
const Descrit = styled.ul`
	color: ${(props) => props.theme.color.main};
	padding-top: 32px;
`;

const DescriptList = styled.li`
	display: flex;
	margin-bottom: 20px;
`;
const DescriptTitle = styled(Paragraph)`
	margin-right: 32px;
`;
const DescriptText = styled(Paragraph)``;

const Process = () => {
	const { isTablet } = useSize();
	const { setLoading } = useLoading();
	const { push } = useRouter();
	const handleBackClick = () => {
		push("/");
	};
	useEffect(() => {
		setLoading(false);
	}, []);
	return (
		<PageContainer loading={true}>
			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						{!isTablet && <ColSidebar hide={true} />}

						<ColContents>
							<PageTitleWrapper
								handleBackClick={handleBackClick}
								title={"BUSINESS OPERATIONAL PROCESS"}
								subTitle={"사업운영 프로세스 "}
								text={["어썸스쿨의 교육사업은 일반적으로 아래 흐름으로 진행하고,", " 상황에 따라 변경될 수 있습니다."]}
							/>

							<ProcessWrapper>
								<Intersection>
									{DATA_PROCESS.process.map((el, index) => {
										return <ProcessList {...el} number={index + 1} key={index} />;
									})}
								</Intersection>
							</ProcessWrapper>

							{/* Core Value */}
							<SectionWrapper title={DATA_PROCESS.contents.title} subTitle={DATA_PROCESS.contents.subTitle} isLast={true}>
								<Intersection>
									<ImageSlider images={DATA_PROCESS.contents.image} />
									<DescritWrapper>
										<Descrit>
											{DATA_PROCESS.contents.descript.map((el, index) => {
												return (
													<DescriptList key={index}>
														<DescriptTitle text={el.title} bold={true} />
														<DescriptText text={el.text} />
													</DescriptList>
												);
											})}
										</Descrit>
									</DescritWrapper>
								</Intersection>
							</SectionWrapper>
						</ColContents>
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default Process;
