const test = (props) => {
	console.log(props);
	return <>test</>;
};

export const getStaticProps = () => {
	return {
		props: {
			test: "test"
		}
	};
};

export default test;
