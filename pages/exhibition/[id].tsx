import styled from "styled-components";
import ContainerSmall from "../../Layout/ContainerSmall";
import PageContainer from "../../Layout/PageContainer";
import Footer from "../../Component/Footer";
import DetailText from "../../Component/detail/DetailText";
import DetailImages from "../../Component/detail/DetailImages";
import { useQuery } from "@apollo/client";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { GET_EXHIBITION_DETAIL } from "../../Queries/exhibitionQueries";
import DetailInfo from "../../Component/detail/DetailInfo";
import DetailWrapper from "../../Layout/DetailWrapper";

const exhibitionDetail = () => {
	const {
		query: { id }
	} = useRouter();
	const { data } = useQuery(GET_EXHIBITION_DETAIL, {
		variables: {
			id
		}
	});
	const [loaded, setLoaded] = useState(false);

	return (
		<DetailWrapper loaded={loaded}>
			<PageContainer>
				{data && (
					<ContainerSmall>
						<DetailText type="exhibition" title={data.getExhibitionDetail.title} text={data.getExhibitionDetail.descript} date={data.getExhibitionDetail.date} />
						<DetailInfo date={data.getExhibitionDetail.date} location={data.getExhibitionDetail.location} link={data.getExhibitionDetail.link} />
						<DetailImages images={data.getExhibitionDetail.images} setLoaded={setLoaded} />
					</ContainerSmall>
				)}
			</PageContainer>
			<Footer />
		</DetailWrapper>
	);
};

export default exhibitionDetail;
