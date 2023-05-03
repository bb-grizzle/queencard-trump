import HeadMeta from "@/components/shared/HeadMeta";
import AppLayout from "@/layout/AppLayout";
import MetaLayout from "@/layout/MetaLayout";
import AppProvider from "@/provider/AppProvider";
import GlobalStyles from "@/styles/global-styles";
import theme from "@/styles/theme";
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
						<Component {...pageProps} />
					</AppLayout>
				</ThemeProvider>
			</AppProvider>
		</MetaLayout>
	);
}
