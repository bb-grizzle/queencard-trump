import styled from "styled-components";
import Icon from "../../Asset/icon";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 0;
	border-bottom: ${(props) => props.theme.style.border};
`;

const Col = styled.div`
	display: flex;
`;

const ColLeft = styled(Col)`
	cursor: pointer;
`;

const Text = styled.p`
	color: ${(props) => props.theme.color.gray.default};
	line-height: 1.5;
`;

const Priority = styled(Text)`
	position: relative;
	color: black;
	font-weight: bold;
	margin-right: 20px;
	${(props) => props.theme.div.right(props.theme.color.gray.default, 1)};
	width: 64px;
	text-align: center;
	flex-shrink: 0;
`;

const Year = styled(Text)`
	color: black;
	margin-right: 16px;
	flex-shrink: 0;
	width: 40px;
`;

const BtnDelete = styled.div`
	padding: 4px;
	border-radius: 100%;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.color.gray.light};
	}
`;

const AdminInfoList = ({ year, priority, text, onClick, onDeleteClick }) => {
	return (
		<Wrapper>
			<ColLeft onClick={onClick}>
				<Priority>{priority}</Priority>
				<Year>{year}</Year>
				<Text>{text}</Text>
			</ColLeft>
			<Col>
				<BtnDelete onClick={onDeleteClick}>
					<Icon name="delete" />
				</BtnDelete>
			</Col>
		</Wrapper>
	);
};

export default AdminInfoList;
