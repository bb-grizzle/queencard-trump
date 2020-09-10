import styled from "styled-components";

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

interface ListWrapperProps {
	className?: string;
}

const ListWrapper: React.FC<ListWrapperProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default ListWrapper;
