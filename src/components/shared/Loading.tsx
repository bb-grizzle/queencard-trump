import styled from "styled-components";

interface LoadingProps {
	className?: string;
}

const Text = styled.p``;

const Loading: React.FC<LoadingProps> = ({ className }) => {
	return <Text className={className}>loading...</Text>;
};

export default Loading;
