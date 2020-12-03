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
import SectionTitle from "../Component/SectionTitle";
import SectionWrapper from "../Component/SectionWrapper";

const title = "ABOUT AWESOME";
const subTitle = "어썸스쿨이 그리는 세상 ";

const index = () => {
	const { data } = useAbout();
	const { isTablet } = useSize();
	const { setLoading } = useLoading();

	useEffect(() => {
		if (data) {
			console.log(data);
			setLoading(false);
		}
	}, [data]);

	const handleBackClick = () => {
		console.log("handleBackClick");
	};

	return (
		<PageContainer>
			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						<ColSidebar />

						{data && (
							<ColContents>
								<PageTitleWrapper handleBackClick={handleBackClick} title={"ABOUT AWESOME"} subTitle={"어썸스쿨이 그리는 세상 "} />

								{/* VISION & MISSION */}
								<SectionWrapper title="IN AWESOME WAY" subTitle="어썸스쿨이 이뤄내는 방식 ">
									SectionWrapper
								</SectionWrapper>

								{/* VALUE */}
								<SectionWrapper title="AWESOME IMPACT" subTitle="어썸스쿨이 가져온 변화">
									SectionWrapper
								</SectionWrapper>

								{/* CONTENTS */}
								<SectionWrapper title={data.title.split("\n")[0]} subTitle={data.title.split("\n")[1]}>
									SectionWrapper
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
