import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";

const portfolio = () => {
	useRidrectToSignin();
	return <PageContainer>admin portfolio</PageContainer>;
};

export default portfolio;
