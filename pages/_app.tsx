import { AppProps } from "next/app";
import MetaLayout from "../Layout/MetaLayout";
import GlobalStyles from "../Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";

import AppProvider from "../Context/AppProvider";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import HeaderLayout from "../Layout/HeaderLayout";
import { fbAnalytics } from "../Firebase/firebase";
import AdminProvider from "../Context/AdminProvider";

import "react-quill/dist/quill.snow.css";
import { scrollToTop } from "../util/scroll";
import polyfill from "../polyfill";

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
	const { pathname } = useRouter();

	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	useEffect(() => {
		fbAnalytics();
	}, []);

	useEffect(() => {
		polyfill();
	}, []);

	return (
		<MetaLayout>
			<GlobalStyles />

			<AppProvider>
				<AdminProvider>
					<ThemeProvider theme={theme}>
						<HeaderLayout>
							<Component {...pageProps} />
						</HeaderLayout>
					</ThemeProvider>
				</AdminProvider>
			</AppProvider>
		</MetaLayout>
	);
}

export default MyApp;
