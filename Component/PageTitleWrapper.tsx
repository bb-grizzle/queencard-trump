import styled from "styled-components";
import BtnIcon from "./Btn/BtnIcon";
import Title from "./Text/Title";
import media from "../Styles/media";
import SectionTitle from "./SectionTitle";
interface PageTitleWrapperProps {
	handleBackClick: () => void;

	title: string;
	subTitle?: string;
}

const BtnWrapper = styled.div`
	margin-bottom: 32px;
`;

const SectionTitleCustome = styled(SectionTitle)`
	margin-bottom: 244px;

	@media ${media.tablet} {
		margin-bottom: 16px;
		padding-bottom: 16px;
	}
`;

const PageTitleWrapper: React.FC<PageTitleWrapperProps> = ({ handleBackClick, title, subTitle }) => {
	return (
		<>
			<BtnWrapper>
				<BtnIcon icon={"arrow_left"} onClick={handleBackClick} />
			</BtnWrapper>

			<SectionTitleCustome title={title} subTitle={subTitle} />
		</>
	);
};

export default PageTitleWrapper;
