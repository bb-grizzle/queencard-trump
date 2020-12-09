import styled, { css } from "styled-components";
import media from "../../Styles/media";

interface BtnIconProps {
	className?: string;
	icon: string;
	onClick?: () => void;
	size?: number;
	scaleAction?: boolean;
	disable?: boolean;
}

const Wrapper = styled.div<{ size; scaleAction; disable: boolean }>`
	width: ${(props) => `${props.size}px`};
	height: ${(props) => `${props.size}px`};
	cursor: pointer;
	${(props) =>
		props.scaleAction &&
		css`
			@media ${media.hover} {
				&:hover {
					transform: scale(1.1);
				}
			}
		`};

	${(props) =>
		props.disable &&
		css`
			opacity: 0.5;
			${(props) => props.theme.event.disBble};
		`};
`;

const Icon = styled.img`
	width: 100%;
`;

const BtnIcon: React.FC<BtnIconProps> = ({ className, icon, onClick, size = 32, scaleAction = true, disable = false }) => {
	return (
		<Wrapper className={className} onClick={onClick} size={size} scaleAction={scaleAction} disable={disable}>
			<Icon src={`/image/icon/ic_${icon}.png`} alt={`icon_${icon}`} />
		</Wrapper>
	);
};

export default BtnIcon;
