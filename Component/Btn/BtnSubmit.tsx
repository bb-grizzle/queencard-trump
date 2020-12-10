import styled, { css } from "styled-components";
interface BtnTextProps {
	text: string;
	onClick?: (e: any) => void;
	className?: string;
	opacityAction?: boolean;
	active?: boolean;
}

const Submit = styled.input<{ opacityAction: boolean; active: boolean }>`
	background-color: ${(props) => props.theme.color.main};

	color: ${(props) => props.theme.color.white};

	cursor: pointer;
	${(props) =>
		!props.active &&
		css`
			opacity: 0.5;
			${(props) => props.theme.event.disable};
		`};
	${(props) => (props.opacityAction ? props.theme.style.hoverDefault : null)};

	/* border: 1px solid blue; */
	/* width: 100%; */
	/* display: inline-block; */
`;
const BtnSubmit: React.FC<BtnTextProps> = ({ className, text, opacityAction = true, active = true, onClick }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onClick(e);
	};
	return <Submit type="submit" value={text} onClick={handleSubmit} className={className} active={active} opacityAction={opacityAction} />;
};

export default BtnSubmit;
