import styled from "styled-components";
import media from "../../Styles/media";
interface BtnTextProps {
	text: string;
	onClick?: () => void;
	className?: string;
	opacityAction?: boolean;
}

const Wrapper = styled.div<{ active: boolean }>`
	cursor: pointer;
	${(props) => (props.active ? props.theme.style.hoverDefault : null)};
`;

const Text = styled.p``;

const BtnText: React.FC<BtnTextProps> = ({ className, text, onClick, opacityAction = true }) => {
	return (
		<Wrapper className={className} onClick={onClick} active={opacityAction}>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default BtnText;
