import styled from "styled-components";
import Icon from "../Asset/icon";
import Paragraph from "./text/Paragraph";
const List = styled.li`
	display: flex;
	flex-wrap: wrap;
	padding: 4px 8px;
	margin-bottom: 4px;
`;

const IconWrapper = styled.div`
	width: 24px;
	height: 24px;
	margin-right: 16px;
`;

const Text = styled(Paragraph)`
	word-break: break-all;
	margin-bottom: 0;
	width: calc(100% - 16px - 24px);
`;

const ExhibitionInfoList = ({ icon, text }) => {
	return (
		<List>
			<IconWrapper>
				<Icon name={icon} color={"black"} />
			</IconWrapper>
			<Text text={text} />
		</List>
	);
};

export default ExhibitionInfoList;
