import styled from "styled-components";
import Footer from "../Component/Footer";
import PageContainer from "../Layout/PageContainer";
import ContainerLayout from "../Layout/ContainerLayout";
import { useQuery } from "@apollo/client";
import { GET_INSPERATION } from "../Queries/insperationQuries";
import List from "../Component/List";
import { useState, useEffect } from "react";
import InpserationDetail from "../Component/InpserationDetail";

const Wrapper = styled.div``;

const ListWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const insperation = () => {
	const { data, loading } = useQuery(GET_INSPERATION);
	const [imageArr, setImageArr] = useState([]);
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [nowIndex, setNowIndex] = useState<number>(null);

	useEffect(() => {
		if (data) {
			setIsImageLoaded(true);
			setImageArr(data.getInsperation.map((el) => el.thumbnail));
		}
	}, [data]);

	const handleListClick = (index) => {
		setNowIndex(index);
	};

	return (
		<Wrapper>
			<PageContainer>
				<ContainerLayout>
					<ListWrapper>
						{data &&
							data.getInsperation.map((el, index) => {
								return <List key={el.id} data={el} router={"insperation"} column={4} onClick={() => handleListClick(index)} />;
							})}
					</ListWrapper>
				</ContainerLayout>
			</PageContainer>
			<InpserationDetail nowIndex={nowIndex} images={imageArr} setNowIndex={setNowIndex} />
			<Footer />
		</Wrapper>
	);
};

export default insperation;
