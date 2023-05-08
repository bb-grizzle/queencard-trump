import HeadMeta from "@/components/shared/HeadMeta";
import AppLayout from "@/layout/AppLayout";
import MetaLayout from "@/layout/MetaLayout";
import client from "@/lib/apollo/apollo-client";
import AppProvider from "@/provider/AppProvider";
import GlobalStyles from "@/styles/global-styles";
import theme from "@/styles/theme";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MetaLayout>
			<AppProvider>
				<ThemeProvider theme={theme}>
					<HeadMeta />
					<GlobalStyles />
					<AppLayout>
						<ApolloProvider client={client}>
							<Component {...pageProps} />
						</ApolloProvider>
					</AppLayout>
				</ThemeProvider>
			</AppProvider>
		</MetaLayout>
	);
}
