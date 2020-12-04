import styled from "styled-components";
import Title from "./Text/Title";
import media from "../Styles/media";
import Paragraph from "./Text/Paragraph";

interface SectionTitleProps {
	title: string;
	subTitle?: string;
	className?: string;
	text?: string;
}

const TitleWrapper = styled.div`
	color: ${(props) => props.theme.color.gray.dark};

	margin-bottom: 244px;

	@media ${media.tablet} {
		padding-bottom: 16px;
		margin-bottom: 40px;
		border-bottom: 1px solid ${(props) => props.theme.color.gray.light};
	}
`;

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle, className, text }) => {
	return (
		<TitleWrapper className={className}>
			<Title title={title} isRegular={true} />
			{subTitle && <Title title={subTitle} />}
			{text && <Paragraph text={text} />}
		</TitleWrapper>
	);
};

export default SectionTitle;
