import DATA_META from "@/data/metaData";
import media from "@/styles/media";
import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";

interface PageLayoutProps {
	children: ReactNode;
	title: string;
	includeHeader?: boolean;
}

const Main = styled.main<{ includeHeader: boolean }>`
	padding-top: ${(props) => (!props.includeHeader ? props.theme.size.header.pc : 0)}px;

	@media ${media.tablet} {
		padding-top: ${(props) => (!props.includeHeader ? props.theme.size.header.tablet : 0)}px;
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
