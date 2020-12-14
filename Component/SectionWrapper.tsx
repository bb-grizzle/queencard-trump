import styled, { css } from "styled-components";
import SectionTitle from "./SectionTitle";
import media from "../Styles/media";

interface SectionWrapperProps {
	title: string;
	subTitle?: string;
	text?: string;
	className?: string;
	gap?: number;
	isLast?: boolean;
}
const Wrapper = styled.div<{ isLast: boolean }>`
	padding-bottom: ${(props) => (props.isLast ? 0 : `125px;`)};
	@media ${media.tablet} {
		padding-bottom: ${(props) => (props.isLast ? 0 : `64px;`)};
	}
`;
const SectionTitleCumstome = styled(SectionTitle)<{ gap?: number }>`
	${(props) =>
		props.gap &&
		css`
			margin-bottom: ${() => `${props.gap}px`};
		`};
`;

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subTitle, className, children, text, gap, isLast = false }) => {
	return (
		<Wrapper className={className} isLast={isLast}>
			<SectionTitleCumstome title={title} subTitle={subTitle} text={text} gap={gap} />
			{children}
		</Wrapper>
	);
};

export default SectionWrapper;
