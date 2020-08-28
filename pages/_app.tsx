import { AppProps } from "next/app";
import HeadComponent from "../src/Component/HeadComponent";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<HeadComponent>
			<Component {...pageProps} />
		</HeadComponent>
	);
}

export default MyApp;
