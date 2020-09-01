import Head from "next/head";
import { headData } from "../Data/head";

const HeadComponent: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>Seohee An</title>
				<meta name="description" content={headData.description} />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap" rel="stylesheet"></link>

				<meta name="viewport" content="width=device-width initial-scale=1.0 user-scalable=no" />

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
