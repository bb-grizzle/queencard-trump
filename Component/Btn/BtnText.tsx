import styled, { css } from "styled-components";
import media from "../../Styles/media";
interface BtnTextProps {
	text: string;
	onClick?: (e: any) => void;
	className?: string;
	opacityAction?: boolean;
	active?: boolean;
}

const Wrapper = styled.div<{ opacityAction: boolean; active: boolean }>`
	cursor: pointer;
	${(props) =>
		!props.active &&
		css`
			opacity: 0.5;
			${(props) => props.theme.event.disable};
		`};
	${(props) => (props.opacityAction ? props.theme.style.hoverDefault : null)};
`;

const Text = styled.p``;

const BtnText: React.FC<BtnTextProps> = ({ className, text, onClick, opacityAction = true, active = true }) => {
	return (
		<Wrapper className={className} onClick={onClick} opacityAction={opacityAction} active={active}>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default BtnText;
