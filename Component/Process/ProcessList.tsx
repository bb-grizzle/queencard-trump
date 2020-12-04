import styled from "styled-components";
import Numbering from "../Numbering";
import theme from "../../Styles/theme";
import Title, { TitleType } from "../Text/Title";
import Paragraph from "../Text/Paragraph";
import media from "../../Styles/media";

const Wrapper = styled.li`
	padding-top: 13px;
	padding-bottom: 30px;
	border-bottom: 1px solid ${(props) => props.theme.color.gray.dark};
	display: flex;
	align-items: flex-start;
	@media ${media.tablet} {
		flex-direction: column;
	}
`;
const Col = styled.div`
	width: 50%;
	@media ${media.tablet} {
		width: 100%;
	}
`;

const ColLeft = styled(Col)`
	display: flex;
	align-items: center;

	@media ${media.tablet} {
		margin-bottom: 8px;
	}
`;

const NumberingCustome = styled(Numbering)`
	margin-right: 21px;
	@media ${media.tablet} {
		margin-right: 8px;
	}
`;

const ProcessList = ({ number, title, text }) => {
	return (
		<Wrapper>
			<ColLeft>
				<NumberingCustome number={number} color={theme.color.gray.dark} />
				<Title title={title} type={TitleType.SM} />
			</ColLeft>

			<Col>
				<Paragraph text={text} size={13} />
			</Col>
		</Wrapper>
	);
};

export default ProcessList;
