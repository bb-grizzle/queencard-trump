import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_WORK } from "../Queries/workQueries";
import Footer from "../Component/Footer";
import ContainerLayout from "../Layout/ContainerLayout";
import PageContainer from "../Layout/PageContainer";
import Masonry from "react-masonry-component";
import List from "../Component/List";
import { useEffect, useState } from "react";
import { setLoading } from "../Context/AppProvider";
import useSize from "../Hook/useSize";

const Wrapper = styled.div``;

const MasonryCumstom = styled(Masonry)``;

const work = () => {
	const { data } = useQuery(GET_WORK);
	const setloading = setLoading();
	const [gutter, setGutter] = useState(16);
	const size = useSize();

	useEffect(() => {
		setloading(true);
	}, []);

	useEffect(() => {
		if (size.isTablet) {
			setGutter(8);
		} else {
			setGutter(16);
		}
	}, [size]);

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
						<MasonryCumstom
							className={"my-gallery-class"} // default ''
							elementType={"ul"} // default 'div'
							options={{ gutter }} // default {}
							disableImagesLoaded={false} // default false
							updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
						>
							{data.getWork.map((el) => {
								return <List mansonry={true} data={el} router={"work"} key={el.id} />;
							})}
						</MasonryCumstom>
					)}
				</ContainerLayout>
			</PageContainer>
			<Footer />
		</Wrapper>
	);
};

export default work;
