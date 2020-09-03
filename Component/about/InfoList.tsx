import styled from "styled-components";
interface InfoListProps {
	year: string;
	text: string;
	className?: string;
}

const Wrapper = styled.div`
	color: ${(props) => props.theme.color.gray.default};
	display: flex;
	height: 24px;
	align-items: center;
`;
const Year = styled.p`
	width: 20%;
`;

const Text = styled.p``;

const InfoList: React.FC<InfoListProps> = ({ year, text, className }) => {
	return (
		<Wrapper className={className}>
			<Year>{year}</Year>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default InfoList;
