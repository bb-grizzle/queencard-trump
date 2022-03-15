import Head from "next/head";
import { headData } from "../Data/head";

const HeadComponent: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>{headData.title}</title>
				<meta name="description" content={headData.description} />

				<meta
					name="viewport"
					content="height=device-height, 
				width=device-width, 
				initial-scale=1.0, 
				minimum-scale=1.0, 
				maximum-scale=1.0, 
				user-scalable=no"
				></meta>
				<meta property="og:title" content={headData.title} />
				<meta property="og:site_name" content={headData.title} />
				<meta property="og:url" content={headData.url} />
				<meta property="og:description" content={headData.description} />
				<meta property="og:image" content={`${headData.url}thumbnail.png`} />
				<meta property="og:type" content="website" />

				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href={`${headData.url}forMobile.png`}></link>
				<link rel="shortcut icon" href={`${headData.url}favicon.ico`}></link>
				<link rel="icon" href={`${headData.url}favicon.ico`} type="image/x-icon"></link>
			</Head>
			{children}
		</>
	);
};

export default HeadComponent;