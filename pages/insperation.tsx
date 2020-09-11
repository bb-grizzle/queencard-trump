import styled from "styled-components";
import Footer from "../Component/Footer";
import PageContainer from "../Layout/PageContainer";
import ContainerLayout from "../Layout/ContainerLayout";
import { useQuery } from "@apollo/client";
import { GET_INSPERATION } from "../Queries/insperationQuries";
import List from "../Component/List";
import { useState, useEffect } from "react";

const Wrapper = styled.div``;

const ListWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const insperation = () => {
	const { data, loading } = useQuery(GET_INSPERATION);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	useEffect(() => {
		if (data) {
			setIsImageLoaded(true);
		}
	}, [data]);

	return (
		<Wrapper>
			<PageContainer>
				<ContainerLayout>
					<ListWrapper>
						{data &&
							data.getInsperation.map((el) => {
								return <List key={el.id} data={el} router={"insperation"} column={4} />;
							})}
					</ListWrapper>
				</ContainerLayout>
			</PageContainer>
			<Footer />
		</Wrapper>
	);
};

export default insperation;
