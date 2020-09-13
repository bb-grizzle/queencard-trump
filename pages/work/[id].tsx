import styled from "styled-components";
import ContainerSmall from "../../Layout/ContainerSmall";
import PageContainer from "../../Layout/PageContainer";
import Footer from "../../Component/Footer";
import DetailText from "../../Component/detail/DetailText";
import DetailImages from "../../Component/detail/DetailImages";
import { useQuery } from "@apollo/client";
import { GET_WORK_DETAIL } from "../../Queries/workQueries";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { preventScroll, activeScroll } from "../../util/preventScroll";
import DetailWrapper from "../../Layout/DetailWrapper";

const workDetail = () => {
	const {
		query: { id }
	} = useRouter();
	const [loaded, setLoaded] = useState(false);
	const { data } = useQuery(GET_WORK_DETAIL, {
		variables: {
			id
		}
	});

	useEffect(() => {
		preventScroll();
	}, []);

	useEffect(() => {
		if (loaded) {
			setTimeout(() => {
				activeScroll();
			}, 1000);
		}
	}, [loaded]);

	return (
		<DetailWrapper loaded={loaded}>
			<PageContainer>
				{data && (
					<ContainerSmall>
						<DetailText type="work" title={data.getWorkDetail.title} text={data.getWorkDetail.descript} date={data.getWorkDetail.date} />
						<DetailImages images={data.getWorkDetail.images} setLoaded={setLoaded} />
					</ContainerSmall>
				)}
			</PageContainer>
			<Footer />
		</DetailWrapper>
	);
};

export default workDetail;
