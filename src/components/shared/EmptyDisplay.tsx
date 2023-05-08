import styled from "styled-components";

const Wrapper = styled.div`
	padding: 32px 0;
`;

const Text = styled.p`
	text-align: center;
`;

const EmptyDisplay = () => {
	return (
		<Wrapper>
			<Text>empty</Text>
		</Wrapper>
	);
};

export default EmptyDisplay;
