import styled from "styled-components";
import media from "../../Styles/media";

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;

	@media ${media.tablet} {
		justify-content: space-between;
	}
`;

interface ListWrapperProps {
	className?: string;
}

const ListWrapper: React.FC<ListWrapperProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default ListWrapper;
