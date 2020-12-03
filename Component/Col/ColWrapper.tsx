import styled from "styled-components";
import media from "../../Styles/media";
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media ${media.tablet} {
		flex-direction: column;
	}
`;

const ColWrapper: React.FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ColWrapper;
