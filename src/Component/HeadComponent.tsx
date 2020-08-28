import Head from "next/head";
import { headData } from "../Data/head";

const HeadComponent: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>타이틀</title>
				<meta name="description" content={headData.description} />

				<meta property="og:title" content={headData.title} />
				<meta property="og:site_name" content={headData.title} />
				<meta property="og:url" content={headData.url} />
				<meta property="og:description" content={headData.description} />
				<meta property="og:image" content="/thumbnail.png" />
				<meta property="og:type" content="website" />
			</Head>
			{children}
		</>
	);
};

export default HeadComponent;
