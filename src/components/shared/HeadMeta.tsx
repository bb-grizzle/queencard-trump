import DATA_META from "@/data/metaData";
import Head from "next/head";

const HeadMeta = () => {
	return (
		<Head>
			{/* title */}
			<title>{DATA_META.title}</title>

			{/* meta */}
			<meta name="description" content="What makes me ME" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
	);
};

export default HeadMeta;
