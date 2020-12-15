import PageContainer from "../Layout/PageLayout";
import { useEffect } from "react";
import { useLoading } from "../Context/AppProvider";
import ContentsWrapper from "../Component/ContentsWrapper";
import ContainerLayout from "../Layout/ContainerLayout";
import ColWrapper from "../Component/Col/ColWrapper";
import ColSidebar from "../Component/Col/ColSidebar";
import useSize from "../Hook/useSize";
import ColContents from "../Component/Col/ColContents";
import PageTitleWrapper from "../Component/PageTitleWrapper";
import { DATA_TUTOR } from "../Data/tutor";
import useTutor from "../Hook/useTutor";
import SectionWrapper from "../Component/SectionWrapper";
import Video from "../Component/Video";
import styled from "styled-components";
import { useRouter } from "next/router";

const PageTitleWrapperCustome = styled(PageTitleWrapper)`
	margin-bottom: 110px;
`;
const SectionWrapperCustome = styled(SectionWrapper)`
	margin-bottom: 0;
`;
const Tutor = () => {
	const { setLoading } = useLoading();
	const { isTablet } = useSize();
	const { data } = useTutor();
	const { push } = useRouter();
	useEffect(() => {
		if (data) {
			console.log(data);
			setLoading(false);
		}
	}, [data]);

	const handleBackClick = () => {
		push("/");
	};
	return (
		<PageContainer loading={!!data}>
			<ContentsWrapper>
				<ContainerLayout>
					<ColWrapper>
						{!isTablet && <ColSidebar hide={true} />}

						<ColContents>
							<PageTitleWrapperCustome handleBackClick={handleBackClick} title={DATA_TUTOR.title} subTitle={DATA_TUTOR.subTitle} text={DATA_TUTOR.text} image={DATA_TUTOR.image} />

							<SectionWrapperCustome title={DATA_TUTOR.contents.title} subTitle={DATA_TUTOR.contents.subTitle} gap={38} isLast={true}>
								{data && <Video value={data.youtubeId} size={100} />}
							</SectionWrapperCustome>
						</ColContents>
					</ColWrapper>
				</ContainerLayout>
			</ContentsWrapper>
		</PageContainer>
	);
};

export default Tutor;
