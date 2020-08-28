import Head from "next/head";

const HeadComponent: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>타이틀</title>
			</Head>
			{children}
		</>
	);
};

export default HeadComponent;
