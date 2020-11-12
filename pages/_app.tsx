import { AppProps } from "next/app";
import MetaLayout from "../Layout/MetaLayout";
import GlobalStyles from "../Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";

import AppProvider from "../Context/AppProvider";
import { useEffect } from "react";
import { checkBrowser } from "../util/checkBrowser";
import { useRouter } from "next/dist/client/router";
import HeaderLayout from "../Layout/HeaderLayout";
import { fbAnalytics } from "../Firebase/firebase";
import AdminProvider from "../Context/AdminProvider";

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
	const { push } = useRouter();

	useEffect(() => {
		const check = async () => {
			const result = checkBrowser();
			if (result === "11.0" || result === "10.0" || result === "9.0") {
				push("/browser_support");
			}
		};
		check();
	}, []);

	useEffect(() => {
		fbAnalytics();
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
