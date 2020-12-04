import styled from "styled-components";
import SectionTitle from "./SectionTitle";

interface SectionWrapperProps {
	title: string;
	subTitle?: string;
	text?: string;
	className?: string;
}
const Wrapper = styled.div`
	padding-bottom: 140px;
`;

const Title = styled(SectionTitle)`
	margin-bottom: 120px;
`;

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subTitle, className, children, text }) => {
	return (
		<Wrapper className={className}>
			<Title title={title} subTitle={subTitle} text={text} />
			{children}
		</Wrapper>
	);
};

export default SectionWrapper;
