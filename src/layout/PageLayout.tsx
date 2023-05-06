import DATA_META from "@/data/metaData";
import media from "@/styles/media";
import Head from "next/head";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface PageLayoutProps {
	children: ReactNode;
	title: string;
	includeHeader?: boolean;
}

const Main = styled.main<{ includeHeader: boolean }>`
	padding: ${(props) => props.theme.size.header.pc + props.theme.size.page.padding.pc}px 0;
	${(props) =>
		props.includeHeader &&
		css`
			padding-top: 0;
		`};

	@media ${media.tablet} {
		padding: ${(props) => props.theme.size.header.tablet + props.theme.size.page.padding.tablet}px;
	}
`;

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, includeHeader = false }) => {
	return (
		<>
			<Head>
				<title>{`${DATA_META.site_name} | ${title}`}</title>
			</Head>
			<Main includeHeader={includeHeader}>{children}</Main>
		</>
	);
};

export default PageLayout;
