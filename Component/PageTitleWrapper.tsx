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
}

const BtnWrapper = styled.div`
	margin-bottom: 32px;
`;

const SectionTitleCustome = styled(SectionTitle)``;

const PageTitleWrapper: React.FC<PageTitleWrapperProps> = ({ handleBackClick, title, subTitle, className }) => {
	return (
		<>
			<BtnWrapper>
				<BtnIcon icon={"arrow_left"} onClick={handleBackClick} />
			</BtnWrapper>

			<SectionTitleCustome title={title} subTitle={subTitle} className={className} />
		</>
	);
};

export default PageTitleWrapper;
