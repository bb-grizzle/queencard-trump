import styled from "styled-components";
import ContainerLayout from "./ContainerLayout";

const Container = styled(ContainerLayout)`
	width: 600px;
`;

const ContainerSmall = ({ children }) => {
	return <Container>{children}</Container>;
};

export default ContainerSmall;
