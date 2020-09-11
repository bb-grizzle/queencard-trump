import styled from "styled-components";
import ContainerSmall from "../../Layout/ContainerSmall";
import PageContainer from "../../Layout/PageContainer";
import Footer from "../../Component/Footer";
import DetailText from "../../Component/detail/DetailText";
import DetailImages from "../../Component/detail/DetailImages";
import { useQuery } from "@apollo/client";

import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { GET_EXHIBITION_DETAIL } from "../../Queries/exhibitionQueries";
import DetailInfo from "../../Component/detail/DetailInfo";

const Wrapper = styled.div``;

const exhibitionDetail = () => {
	const {
		query: { id }
	} = useRouter();
	const { data } = useQuery(GET_EXHIBITION_DETAIL, {
		variables: {
			id
		}
	});

	useEffect(() => {
		if (data) {
			console.log(data.getExhibitionDetail);
		}
	}, [data]);

	return (
		<Wrapper>
			<PageContainer>
				{data && (
					<ContainerSmall>
						<DetailText type="exhibition" title={data.getExhibitionDetail.title} text={data.getExhibitionDetail.descript} date={data.getExhibitionDetail.date} />
						<DetailInfo date={data.getExhibitionDetail.date} location={data.getExhibitionDetail.location} link={data.getExhibitionDetail.link} />
						<DetailImages images={data.getExhibitionDetail.images} />
					</ContainerSmall>
				)}
			</PageContainer>
			<Footer />
		</Wrapper>
	);
};

export default exhibitionDetail;
