import styled from "styled-components";

const Wrapper = styled.div<{ active: boolean }>`
	transform: ${(props) => `translateY(${props.active ? "0" : "100px"});`};
	opacity: ${(props) => (props.active ? "1" : "0")};
	transition: all 0.8s ease-in-out;
`;

const DetailWrapper = ({ children, loaded }) => {
	return <Wrapper active={loaded}>{children}</Wrapper>;
};

export default DetailWrapper;
