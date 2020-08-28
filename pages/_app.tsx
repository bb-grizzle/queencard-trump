import { AppProps } from "next/app";
import MetaLayout from "../Layout/MetaLayout";
import GlobalStyles from "../Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";
import HeaderLayout from "../Layout/HeaderLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MetaLayout>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<HeaderLayout>
					<Component {...pageProps} />
				</HeaderLayout>
			</ThemeProvider>
		</MetaLayout>
	);
}

export default MyApp;
