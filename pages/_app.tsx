import { AppProps } from "next/app";
import MetaLayout from "../Layout/MetaLayout";
import GlobalStyles from "../Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";
import HeaderLayout from "../Layout/HeaderLayout";

import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import Client from "../Apollo/Client";
import Loading from "../Component/loading";
import AppProvider from "../Context/AppProvider";

interface MyAppProps extends AppProps {
	apollo: any;
}

function MyApp({ Component, pageProps, apollo }: MyAppProps) {
	return (
		<ApolloProvider client={apollo}>
			<AppProvider>
				<MetaLayout>
					<GlobalStyles />
					<ThemeProvider theme={theme}>
						<HeaderLayout>
							<Component {...pageProps} />
						</HeaderLayout>
					</ThemeProvider>
				</MetaLayout>
			</AppProvider>
		</ApolloProvider>
	);
}

export default withApollo(() => Client)(MyApp);
