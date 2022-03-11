import styled, { css } from "styled-components";
import Paragraph from "../Text/Paragraph";
import { useState, useEffect } from "react";
import useSize from "../../Hook/useSize";
import media from "../../Styles/media";

interface PopupProps {
	parentSize: number;
	active: boolean;
}

const Wrapper = styled.div<{ left: number; active: boolean }>`
	width: 449px;
	height: 177px;
	background-color: ${(props) => props.theme.color.white};
	border: 1px solid ${(props) => props.theme.color.main};

	position: fixed;
	left: ${(props) => `${props.left}px`};
	transform: translateX(-50%) translateY(32px);
	bottom: 197px;
	${(props) => props.theme.layout.center_flex};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity transform;
	opacity: 0;
	${(props) => props.theme.event.disable};
	z-index: ${(props) => props.theme.zIndex.popup};

	${(props) =>
		props.active &&
		css`
			transform: translateX(-50%) translateY(0px);
			opacity: 1;
		`};

	@media ${media.tablet} {
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%) translateY(32px);
		max-width: 90%;

		${(props) =>
			props.active &&
			css`
				transform: translate(-50%, 50%);
			`};
	}
`;

const Text = styled(Paragraph)`
	text-align: center;
`;
const Popup: React.FC<PopupProps> = ({ parentSize, active }) => {
	const [gap, setGap] = useState<number>();
	const { width, isTablet } = useSize();
	const [colSize, setColSize] = useState<number>();
	const [left, setLeft] = useState<number>();

	useEffect(() => {
		setGap((width - parentSize) / 2);
	}, [parentSize, width]);

	useEffect(() => {
		setColSize(parentSize / 4);
	}, [parentSize]);

	useEffect(() => {
		if (isTablet) {
			setLeft(colSize * 2);
		} else {
			setLeft(gap + colSize + (colSize * 3) / 2);
		}
	}, [gap, colSize, isTablet]);

	return (
		<Wrapper left={left} active={active}>
			<Text text={["문의 남겨주셔서 감사합니다.", "빠르게 확인 후 연락드리겠습니다. "]} />
		</Wrapper>
	);
};

export default Popup;
