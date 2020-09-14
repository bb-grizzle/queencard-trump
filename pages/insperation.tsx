import styled from "styled-components";
import Footer from "../Component/Footer";
import PageContainer from "../Layout/PageContainer";
import ContainerLayout from "../Layout/ContainerLayout";
import { useQuery } from "@apollo/client";
import { GET_INSPERATION } from "../Queries/insperationQuries";
import List from "../Component/List";
import { useState, useEffect, useMemo } from "react";
import InpserationDetail from "../Component/InpserationDetail";

const Wrapper = styled.div``;

const ListWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const insperation = () => {
	const { data } = useQuery(GET_INSPERATION);
	const [clientDate, setClientData] = useState([]);
	const [imageArr, setImageArr] = useState([]);
	const [nowIndex, setNowIndex] = useState(null);

	useEffect(() => {
		if (data) {
			setClientData(data.getInsperation);
			setImageArr(data.getInsperation.map((el) => el.thumbnail));
		}
	}, [data]);

	const handleListClick = (index) => {
		setNowIndex(index);
	};

	const renderList = useMemo(() => {
		return clientDate.map((el, index) => {
			return <List key={el.id} data={el} router={"insperation"} column={4} onClick={() => handleListClick(index)} />;
		});
	}, [clientDate]);

	return (
		<Wrapper>
			<PageContainer>
				<ContainerLayout>
					<ListWrapper>{renderList}</ListWrapper>
				</ContainerLayout>
			</PageContainer>
			<InpserationDetail nowIndex={nowIndex} images={imageArr} setNowIndex={setNowIndex} />
			<Footer />
		</Wrapper>
	);
};

export default insperation;
