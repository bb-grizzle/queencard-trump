import styled from "styled-components";
import media from "../Styles/media";
import Footer from "../Component/Footer";
import useSize from "../Hook/useSize";

interface PageContainerProps {
	paddingTop?: boolean;
	className?: string;
}

const Wrapper = styled.div<{ paddingTop?: boolean }>`
	padding-top: ${(props) => (props.paddingTop ? `calc(${props.theme.size.header.pc} + 56px)` : props.theme.size.header.pc)};
	padding-bottom: 100px;
	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.header.mobile};
		padding-bottom: 64px;
	}
	min-height: ${(props) => props.theme.layout.full_height};
`;
const PageContainer: React.FC<PageContainerProps> = ({ children, paddingTop, className }) => {
	const { isTablet } = useSize();
	return (
		<Wrapper paddingTop={paddingTop} className={className}>
			{children}

			{isTablet && <Footer />}
		</Wrapper>
	);
};

export default PageContainer;
