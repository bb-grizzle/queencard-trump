import PageContainer from "../Layout/PageLayout";
import { useEffect } from "react";
import { useLoading } from "../Context/AppProvider";

const Contact = () => {
	const { setLoading } = useLoading();
	useEffect(() => {
		setLoading(false);
	}, []);
	return <PageContainer>Contact</PageContainer>;
};

export default Contact;
