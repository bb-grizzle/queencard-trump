import PageContainer from "../Layout/PageLayout";
import ContainerLayout from "../Layout/ContainerLayout";
import Title from "../Components/Text/Title";
import { useLoading } from "../Context/AppProvider/useLoading";
import { useEffect } from "react";

const index = () => {
	// FIELD
	const { endLoading } = useLoading();

	// STATE
	useEffect(() => {
		endLoading();
	}, []);

	// RENDER
	return (
		<PageContainer>
			<ContainerLayout>
				<Title title={"next.js project init"} />
			</ContainerLayout>
		</PageContainer>
	);
};

export default index;
