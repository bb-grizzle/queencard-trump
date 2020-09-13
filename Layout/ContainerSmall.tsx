import styled from "styled-components";
import ContainerLayout from "./ContainerLayout";
import media from "../Styles/media";

const Container = styled(ContainerLayout)`
	width: 600px;
	max-width: 90%;
	@media ${media.tablet} {
		width: 90%;
	}
`;

const ContainerSmall = ({ children }) => {
	return <Container>{children}</Container>;
};

export default ContainerSmall;
