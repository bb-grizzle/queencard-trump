import styled from "styled-components";
import ContainerLayout from "./ContainerLayout";
import media from "../Styles/media";

interface ContainerSmallProps {
	className?: string;
}

const Container = styled(ContainerLayout)`
	width: 600px;
	max-width: 90%;
	@media ${media.tablet} {
		width: 90%;
	}
`;

const ContainerSmall: React.FC<ContainerSmallProps> = ({ children, className }) => {
	return <Container>{children}</Container>;
};

export default ContainerSmall;
