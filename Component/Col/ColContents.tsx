import styled from "styled-components";
import ColDefault from "./ColDefault";
import { MutableRefObject } from "react";
import useSize from "../../Hook/useSize";
import media from "../../Styles/media";
interface ColContentsProps {
	refElement?: MutableRefObject<HTMLDivElement>;
}

const ColWrapper = styled(ColDefault)`
	min-height: ${(props) => props.theme.size.full_height};
	@media ${media.tablet} {
		min-height: initial;
	}
`;

const ColContents: React.FC<ColContentsProps> = ({ children, refElement }) => {
	const { isTablet } = useSize();
	return (
		<ColWrapper col={!isTablet ? 75 : 100} refElement={refElement}>
			{children}
		</ColWrapper>
	);
};

export default ColContents;
