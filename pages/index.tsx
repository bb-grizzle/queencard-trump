import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_WORK } from "../Queries/workQueries";
import Footer from "../Component/Footer";
import ContainerLayout from "../Layout/ContainerLayout";
import PageContainer from "../Layout/PageContainer";
import Masonry from "react-masonry-component";
import List from "../Component/List";
import { useEffect } from "react";
import { setLoading } from "../Context/AppProvider";

const masonryOptions = {
	transitionDuration: 0
};

const Wrapper = styled.div``;

const work = () => {
	const { data } = useQuery(GET_WORK);
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
				<ContainerLayout>
					{data && (
						<Masonry
							className={"my-gallery-class"} // default ''
							elementType={"ul"} // default 'div'
							options={masonryOptions} // default {}
							disableImagesLoaded={false} // default false
							updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
						>
							{data.getWork.map((el) => {
								return <List data={el} router={"work"} key={el.id} />;
							})}
						</Masonry>
					)}
				</ContainerLayout>
			</PageContainer>
			<Footer />
		</Wrapper>
	);
};

export default work;
