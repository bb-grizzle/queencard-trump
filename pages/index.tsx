import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_WORK } from "../Queries/workQueries";
import { useEffect } from "react";
import { setLoading } from "../Context/AppProvider";
import Footer from "../Component/Footer";
import ContainerLayout from "../Layout/ContainerLayout";
import PageContainer from "../Layout/PageContainer";

const Wrapper = styled.div``;

const work = () => {
	const { data, loading } = useQuery(GET_WORK);
	const setloading = setLoading();

	useEffect(() => {
		// setloading(loading);
	}, [loading]);

	return (
		<PageContainer>
			<ContainerLayout></ContainerLayout>
			<Footer />
		</PageContainer>
	);
};

export default work;
