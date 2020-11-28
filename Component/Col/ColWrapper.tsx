import styled from "styled-components";
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ColWrapper: React.FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ColWrapper;
