import styled from "styled-components";

interface BtnIconProps {
	className?: string;
	icon: string;
	onClick?: () => void;
}

const Wrapper = styled.div`
	width: 32px;
	height: 32px;
	cursor: pointer;
`;

const Icon = styled.img`
	width: 100%;
`;

const BtnIcon: React.FC<BtnIconProps> = ({ className, icon, onClick }) => {
	return (
		<Wrapper className={className} onClick={onClick}>
			<Icon src={`/image/icon/ic_${icon}.png`} alt={`icon_${icon}`} />
		</Wrapper>
	);
};

export default BtnIcon;
