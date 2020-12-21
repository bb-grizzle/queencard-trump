import PageContainer from "../Layout/PageLayout";
import { useEffect } from "react";
import { useLoading } from "../Context/AppProvider";
import useImageLoad from "../Hook/useImageLoad";

const index = () => {
	const { setLoading } = useLoading();
	const { load, setUrl } = useImageLoad(null);

	useEffect(() => {
		if (load) {
			setLoading(false);
		}
	}, [load]);

	return <PageContainer>INDEX</PageContainer>;
};

export default index;
