import styled from "styled-components";

const Test = styled.p`
	color: red;
	background-color: black;
	width: 400px;
	height: 400px;
`;

const test = (props) => {
	console.log(props);
	return <Test>test</Test>;
};

export const getStaticProps = () => {
	return {
		props: {
			test: "test"
		}
	};
};

export default test;
