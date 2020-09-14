import styled from "styled-components";
import Paragraph from "../text/Paragraph";
interface InfoListProps {
	year: string;
	text: string;
	className?: string;
}

const Wrapper = styled.div`
	color: ${(props) => props.theme.color.gray.default};
	display: flex;
	min-height: 24px;

	/* align-items: center; */
`;
const Year = styled(Paragraph)`
	width: 20%;
	flex-shrink: 0;
	margin-bottom: 0;
	color: ${(props) => props.theme.color.black};
	font-weight: bold;
`;

const Text = styled(Paragraph)`
	width: 80%;
	flex-grow: 0;
	flex-shrink: 0;
	margin-bottom: 0;
`;

const InfoList: React.FC<InfoListProps> = ({ year, text, className }) => {
	return (
		<Wrapper className={className}>
			<Year text={year} />
			<Text text={text} />
		</Wrapper>
	);
};

export default InfoList;
