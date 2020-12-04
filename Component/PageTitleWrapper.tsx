import styled from "styled-components";
import BtnIcon from "./Btn/BtnIcon";
import Title from "./Text/Title";
import media from "../Styles/media";
import SectionTitle from "./SectionTitle";
interface PageTitleWrapperProps {
	handleBackClick: () => void;

	title: string;
	subTitle?: string;
	className?: string;
	text?: string | string[];
}

const BtnWrapper = styled.div`
	margin-bottom: 32px;
`;

const SectionTitleCustome = styled(SectionTitle)`
	@media ${media.desktop} {
		margin-bottom: 64px;
	}
`;
const Wrapper = styled.div``;

const PageTitleWrapper: React.FC<PageTitleWrapperProps> = ({ handleBackClick, title, subTitle, className, text }) => {
	return (
		<Wrapper className={className}>
			<BtnWrapper>
				<BtnIcon icon={"arrow_left"} onClick={handleBackClick} />
			</BtnWrapper>

			<SectionTitleCustome title={title} subTitle={subTitle} className={className} text={text} />
		</Wrapper>
	);
};

export default PageTitleWrapper;
