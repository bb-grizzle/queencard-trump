import DATA_META from "@/data/metaData";
import media from "@/styles/media";
import Head from "next/head";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import LoadingLayout, { LoadingLayoutProps } from "./LoadingLayout";

interface PageLayoutProps extends LoadingLayoutProps {
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
		padding: ${(props) => props.theme.size.header.tablet + props.theme.size.page.padding.tablet}px 0;
	}
`;

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, includeHeader = false, loading = false, error = false, errorMessage }) => {
	return (
		<>
			<Head>
				<title>{`${DATA_META.site_name} | ${title}`}</title>
			</Head>
			<Main includeHeader={includeHeader}>
				<LoadingLayout loading={loading} error={error} errorMessage={errorMessage}>
					{children}
				</LoadingLayout>
			</Main>
		</>
	);
};

export default PageLayout;
