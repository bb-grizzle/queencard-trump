import styled from "styled-components";

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const ListWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ListWrapper;
