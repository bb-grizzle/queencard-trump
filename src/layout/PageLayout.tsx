import DATA_META from "@/data/metaData";
import media from "@/styles/media";
import Head from "next/head";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import LoadingLayout, { LoadingLayoutProps } from "./LoadingLayout";

interface PageLayoutProps extends LoadingLayoutProps {
	children: ReactNode;
	title: string;
}

const Main = styled.main`
	height: ${props => props.theme.size.full_height};
	overflow: hidden;
`;

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, loading = false, error = false, errorMessage }) => {
	return (
		<>
			<Head>
				<title>{`${DATA_META.site_name}`}</title>
			</Head>
			<Main>
				<LoadingLayout loading={loading} error={error} errorMessage={errorMessage}>
					{children}
				</LoadingLayout>
			</Main>
		</>
	);
};

export default PageLayout;
