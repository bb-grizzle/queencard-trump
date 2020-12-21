import styled from "styled-components";
import media from "../Styles/media";
import Footer from "../Component/Default/Footer";

interface PageContainerProps {
	paddingTop?: boolean;
	className?: string;
	loading?: boolean;
}

const Wrapper = styled.div`
	padding-top: ${(props) => `${props.theme.size.header.pc}px`};
	padding-bottom: 100px;
	@media ${media.tablet} {
		padding-top: ${(props) => `${props.theme.size.header.mobile}px`};
		padding-bottom: 32px;
	}
`;
const PageContainer: React.FC<PageContainerProps> = ({ children, className, loading }) => {
	return (
		<Wrapper className={className}>
			{children}
			<Footer />
		</Wrapper>
	);
};

export default PageContainer;
