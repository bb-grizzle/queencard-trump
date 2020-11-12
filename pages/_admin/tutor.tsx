import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";

const tutor = () => {
	useRidrectToSignin();
	return <PageContainer>admin tutor</PageContainer>;
};

export default tutor;
