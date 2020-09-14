import { AppProps } from "next/app";
import MetaLayout from "../Layout/MetaLayout";
import GlobalStyles from "../Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";
import HeaderLayout from "../Layout/HeaderLayout";

import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import Client from "../Apollo/Client";
import AppProvider from "../Context/AppProvider";
import AdminProvider from "../Context/AdminProvider";
import { useEffect } from "react";
import { checkBrowser } from "../util/checkBrowser";
import { useRouter } from "next/dist/client/router";

interface MyAppProps extends AppProps {
	apollo: any;
}

function MyApp({ Component, pageProps, apollo }: MyAppProps) {
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
			<ApolloProvider client={apollo}>
				<AppProvider>
					<AdminProvider>
						<ThemeProvider theme={theme}>
							<HeaderLayout>
								<Component {...pageProps} />
							</HeaderLayout>
						</ThemeProvider>
					</AdminProvider>
				</AppProvider>
			</ApolloProvider>
		</MetaLayout>
	);
}

export default withApollo(() => Client)(MyApp);
