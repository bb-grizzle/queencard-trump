import styled from "styled-components";
import BarLoader from "react-spinners/BarLoader";

interface LoadingProps {
	className?: string;
}

const Wrapper = styled.div`
	${props => props.theme.layout.full_abs};
	${props => props.theme.layout.center_flex};
`;

const Loading: React.FC<LoadingProps> = ({ className }) => {
	return <Wrapper>
		<BarLoader />
	</Wrapper>
};

export default Loading;
