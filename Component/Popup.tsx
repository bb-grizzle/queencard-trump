import styled from "styled-components";
import Paragraph from "./Text/Paragraph";

const Wrapper = styled.div`
	width: 449px;
	height: 177px;
	background-color: ${(props) => props.theme.color.white};
	border: 1px solid ${(props) => props.theme.color.main};

	position: fixed;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	${(props) => props.theme.layout.center_flex};
`;

const Text = styled(Paragraph)`
	text-align: center;
`;
const Popup = () => {
	return (
		<Wrapper>
			<Text text={["문의 남겨주셔서 감사합니다.", "빠르게 확인 후 연락드리겠습니다. "]} />
		</Wrapper>
	);
};

export default Popup;
