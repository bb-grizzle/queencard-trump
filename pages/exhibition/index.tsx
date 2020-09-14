import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_EXHIBITION } from "../../Queries/exhibitionQueries";
import Footer from "../../Component/Footer";
import PageContainer from "../../Layout/PageContainer";
import ExhibitionList from "../../Component/ExhibitionList";
import ContainerSmall from "../../Layout/ContainerSmall";
import { setLoading } from "../../Context/AppProvider";
import { useEffect } from "react";

const Wrapper = styled.div``;

const ListWrapper = styled.ul``;

const exhibition = () => {
	const { data } = useQuery(GET_EXHIBITION);
	const setloading = setLoading();

	useEffect(() => {
		setloading(true);
	}, []);
	useEffect(() => {
		if (data) {
			setloading(false);
		}
	}, [data]);

	return (
		<Wrapper>
			<PageContainer>
				<ContainerSmall>
					{data && (
						<ListWrapper>
							{data.getExhibition.map((el) => {
								return <ExhibitionList id={el.id} key={el.id} title={el.title} date={el.date} gallery={el.gallery} link={el.link} location={el.location} image={el.images[0].url} />;
							})}
						</ListWrapper>
					)}
				</ContainerSmall>
			</PageContainer>

			<Footer />
		</Wrapper>
	);
};

export default exhibition;
