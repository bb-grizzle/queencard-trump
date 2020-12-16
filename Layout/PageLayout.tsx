import styled from "styled-components";
import media from "../Styles/media";
import Footer from "../Component/Footer";
import { useEffect } from "react";
import { useLoading } from "../Context/AppProvider";
import { useRouter } from "next/router";

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
	/* min-height: ${(props) => props.theme.size.full_height}; */
`;
const PageContainer: React.FC<PageContainerProps> = ({ children, className, loading }) => {
	const { setLoading } = useLoading();
	const { pathname } = useRouter();
	useEffect(() => {
		if (!pathname.includes("_admin")) {
			setLoading(true);
		}
	}, []);
	return (
		<Wrapper className={className}>
			{children}

			{loading && <Footer />}
		</Wrapper>
	);
};

export default PageContainer;
