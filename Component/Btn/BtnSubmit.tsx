import styled, { css } from "styled-components";
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
const Submit = styled.input`
	background-color: transparent;
	color: inherit;
`;
const BtnSubmit: React.FC<BtnTextProps> = ({ className, text, onClick, opacityAction = true, active = true }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onClick(e);
	};
	return (
		<Wrapper className={className} active={active} opacityAction={opacityAction}>
			<Submit type="submit" value={text} onClick={handleSubmit} />
		</Wrapper>
	);
};

export default BtnSubmit;
