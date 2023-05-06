import styled from "styled-components";

interface TextKeyPairProps {
	className?: string;
	field: string;
	value: string;
	layout?: "space-between" | "flex-start";
}

const Wrapper = styled.div<{ layout: string }>`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => props.layout};
`;

const Text = styled.p``;

const TextKeyPair: React.FC<TextKeyPairProps> = ({ className, field, value, layout = "space-between" }) => {
	return (
		<Wrapper className={className} layout={layout}>
			<Text>{field}</Text>
			<Text>{value}</Text>
		</Wrapper>
	);
};

export default TextKeyPair;
