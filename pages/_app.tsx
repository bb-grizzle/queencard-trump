import { AppProps } from "next/app";
import MetaLayout from "../Layout/MetaLayout";
import GlobalStyles from "../Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";

import AppProvider from "../Context/AppProvider";
import { useEffect } from "react";
import { checkBrowser } from "../util/checkBrowser";
import { useRouter } from "next/dist/client/router";

interface MyAppProps extends AppProps {
	apollo: any;
}

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

	return (
		<MetaLayout>
			<GlobalStyles />
			<AppProvider>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</AppProvider>
		</MetaLayout>
	);
}

export default MyApp;
