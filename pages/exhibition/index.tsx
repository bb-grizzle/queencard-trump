import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_EXHIBITION } from "../../Queries/exhibitionQueries";
import Footer from "../../Component/Footer";
import PageContainer from "../../Layout/PageContainer";
import { useEffect } from "react";
import ExhibitionList from "../../Component/ExhibitionList";
import ContainerLayout from "../../Layout/ContainerLayout";

const Wrapper = styled.div``;

const ListWrapper = styled.ul``;

const Container = styled(ContainerLayout)`
	width: 600px;
`;

const exhibition = () => {
	const { data, loading } = useQuery(GET_EXHIBITION);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Wrapper>
			<PageContainer>
				<Container>
					{data && (
						<ListWrapper>
							{data.getExhibition.map((el) => {
								return <ExhibitionList id={el.id} key={el.id} title={el.title} date={el.date} gallery={el.gallery} link={el.link} location={el.location} image={el.images[0].url} />;
							})}
						</ListWrapper>
					)}
				</Container>
			</PageContainer>

			<Footer />
		</Wrapper>
	);
};

export default exhibition;
