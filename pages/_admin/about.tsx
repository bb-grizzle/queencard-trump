import PageContainer from "../../Layout/PageLayout";
import useRidrectToSignin from "../../Hook/useRidrectToSignin";

const about = () => {
	useRidrectToSignin();
	return <PageContainer>admin about</PageContainer>;
};

export default about;
