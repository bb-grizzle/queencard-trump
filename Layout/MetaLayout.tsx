import Head from "next/head";
import { headData } from "../Data/head";
import { useEffect } from "react";
import { makeFullHeight } from "../util/fullHeight";

const HeadComponent: React.FC = ({ children }) => {
	useEffect(() => {
		makeFullHeight();
	}, []);
	return (
		<>
			<Head>
				<title>Seohee An</title>
				<meta name="description" content={headData.description} />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap" rel="stylesheet"></link>

				<meta
					name="viewport"
					content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no"
				></meta>
				<meta property="og:title" content={headData.title} />
				<meta property="og:site_name" content={headData.title} />
				<meta property="og:url" content={headData.url} />
				<meta property="og:description" content={headData.description} />
				<meta property="og:image" content="/thumbnail.png" />
				<meta property="og:type" content="website" />

				<link rel="apple-touch-icon" href="/forMobile.png"></link>
				<link rel="shortcut icon" href="/favicon.ico"></link>
			</Head>
			{children}
		</>
	);
};

export default HeadComponent;
