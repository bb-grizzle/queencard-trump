import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import media from "../Styles/media";

interface SectionWrapperProps {
	title: string;
	subTitle?: string;
	text?: string;
	className?: string;
}
const Wrapper = styled.div`
	padding-bottom: 140px;
	@media ${media.tablet} {
		padding-bottom: 64px;
	}
`;

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subTitle, className, children, text }) => {
	return (
		<Wrapper className={className}>
			<SectionTitle title={title} subTitle={subTitle} text={text} />
			{children}
		</Wrapper>
	);
};

export default SectionWrapper;
