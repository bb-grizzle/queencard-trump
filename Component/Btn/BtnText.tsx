import styled from "styled-components";
interface BtnTextProps {
	text: string;
	onClick: () => void;
	className?: string;
}

const Wrapper = styled.div``;

const Text = styled.p``;

const BtnText: React.FC<BtnTextProps> = ({ className, text, onClick }) => {
	return (
		<Wrapper className={className} onClick={onClick}>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default BtnText;
