import styled from "styled-components";
import media from "../Styles/media";
import Footer from "../Component/Footer";
import useSize from "../Hook/useSize";
import { useEffect } from "react";
import { useLoading } from "../Context/AppProvider";

interface PageContainerProps {
	paddingTop?: boolean;
	className?: string;
}

const Wrapper = styled.div`
	padding-top: ${(props) => props.theme.size.header.pc};
	padding-bottom: 100px;
	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.header.mobile};
		padding-bottom: 64px;
	}
	min-height: ${(props) => props.theme.layout.full_height};
`;
const PageContainer: React.FC<PageContainerProps> = ({ children, className }) => {
	const { isTablet } = useSize();
	const { setLoading } = useLoading();
	useEffect(() => {
		setLoading(true);
	}, []);
	return (
		<Wrapper className={className}>
			{children}

			{isTablet && <Footer />}
		</Wrapper>
	);
};

export default PageContainer;
