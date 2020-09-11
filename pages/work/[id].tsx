import styled from "styled-components";
import ContainerSmall from "../../Layout/ContainerSmall";
import PageContainer from "../../Layout/PageContainer";
import Footer from "../../Component/Footer";
import DetailText from "../../Component/detail/DetailText";
import DetailImages from "../../Component/detail/DetailImages";
import { useQuery } from "@apollo/client";
import { GET_WORK_DETAIL } from "../../Queries/workQueries";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Wrapper = styled.div``;

const workDetail = () => {
	const {
		query: { id }
	} = useRouter();
	const { data } = useQuery(GET_WORK_DETAIL, {
		variables: {
			id
		}
	});

	return (
		<Wrapper>
			<PageContainer>
				{data && (
					<ContainerSmall>
						<DetailText type="work" title={data.getWorkDetail.title} text={data.getWorkDetail.descript} date={data.getWorkDetail.date} />
						{/* <DetailInfo /> */}
						<DetailImages images={data.getWorkDetail.images} />
					</ContainerSmall>
				)}
			</PageContainer>
			<Footer />
		</Wrapper>
	);
};

export default workDetail;
