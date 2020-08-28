import { AppProps } from "next/app";
import HeadComponent from "../src/Component/HeadComponent";
import GlobalStyles from "../src/Styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "../src/Styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<HeadComponent>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</HeadComponent>
	);
}

export default MyApp;
