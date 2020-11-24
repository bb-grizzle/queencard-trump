import styled from "styled-components";

interface BtnIconProps {
	className?: string;
	icon: string;
	onClick?: () => void;
	size?: number;
}

const Wrapper = styled.div<{ size }>`
	width: ${(props) => `${props.size}px`};
	height: ${(props) => `${props.size}px`};
	cursor: pointer;
`;

const Icon = styled.img`
	width: 100%;
`;

const BtnIcon: React.FC<BtnIconProps> = ({ className, icon, onClick, size = 32 }) => {
	return (
		<Wrapper className={className} onClick={onClick} size={size}>
			<Icon src={`/image/icon/ic_${icon}.png`} alt={`icon_${icon}`} />
		</Wrapper>
	);
};

export default BtnIcon;
