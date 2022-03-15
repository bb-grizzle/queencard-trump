import { AppProps } from "next/app";
import MetaLayout from "../Layout/MetaLayout";
import GlobalStyles from "../Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";

import AppProvider from "../Context/AppProvider";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import TotalWrapperLayout from "../Layout/TotalWrapperLayout";
import AdminProvider from "../Context/AdminProvider";
import polyfill from "../polyfill";
import { scrollToTop } from "../util/scroll";
import { makeFullHeight } from "../util/fullHeight";

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
	const { pathname } = useRouter();

	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	useEffect(() => {
		polyfill();
		makeFullHeight();
	}, []);

	return (
		<MetaLayout>
			<GlobalStyles />
			<AppProvider>
				<AdminProvider>
					<ThemeProvider theme={theme}>
						<TotalWrapperLayout>
							<Component {...pageProps} />
						</TotalWrapperLayout>
					</ThemeProvider>
				</AdminProvider>
			</AppProvider>
		</MetaLayout>
	);
}

export default MyApp;