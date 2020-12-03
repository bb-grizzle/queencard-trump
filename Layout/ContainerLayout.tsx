import styled from "styled-components";
import media from "../Styles/media";

interface ContainerLayoutProps {
	className?: string;
	small?: boolean;
	containerRef?: any;
}
const Wrapper = styled.div<{ small: boolean }>`
	width: ${(props) => (props.small ? "640px" : "1200px")};
	margin: auto;
	max-width: 90%;
	height: 100%;

	@media ${media.tablet} {
		max-width: initial;
		width: ${(props) => ` calc(100% - ${props.theme.size.offset.tablet * 2}px);`};
	}
`;

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children, className, small = false, containerRef }) => {
	return (
		<Wrapper className={className} small={small} ref={containerRef}>
			{children}
		</Wrapper>
	);
};

export default ContainerLayout;
