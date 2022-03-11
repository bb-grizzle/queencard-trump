import styled from "styled-components";
import media from "../../Styles/media";
interface FooterProps {
	className?: string;
}

const Wrapper = styled.footer`
	margin-top: 120px;
	color: ${(props) => props.theme.color.gray[500]};

	@media ${media.tablet} {
		margin-top: 64px;
	}
`;

const Footer: React.FC<FooterProps> = ({ className }) => {
	return <Wrapper className={className}>FOOTER</Wrapper>;
};

export default Footer;
