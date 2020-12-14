import styled, { css } from "styled-components";
import BtnIcon from "./Btn/BtnIcon";
import Title from "./Text/Title";
import media from "../Styles/media";
import SectionTitle from "./SectionTitle";
import BackgroundImage from "./BackgroundImage";
interface PageTitleWrapperProps {
	handleBackClick: () => void;

	title: string;
	subTitle?: string;
	className?: string;
	text?: string | string[];
	image?: string;
}

const BtnWrapper = styled.div`
	margin-bottom: 32px;
`;

const Wrapper = styled.div``;
const TitleWrapper = styled.div<{ image: boolean }>`
	${(props) =>
		props.image &&
		css`
			display: flex;
			flex-shrink: 0;

			@media ${media.mobile} {
				flex-direction: column;
			}
		`};
`;
const SectionTitleCustome = styled(SectionTitle)<{ isHalf: boolean }>`
	margin-bottom: 125px;
	${(props) =>
		props.isHalf
			? css`
					padding-right: 16px;

					@media ${media.mobile} {
						margin-bottom: 0 !important;
					}
			  `
			: css`
					padding-right: 0;

					@media ${media.desktop} {
						margin-bottom: 64px;
					}
			  `};
`;
const TitleImage = styled.div`
	${(props) => props.theme.layout.ratio(140)};
	position: relative;
	width: 50%;
	flex-shrink: 0;
	padding-left: 16px;
	@media ${media.mobile} {
		width: 100%;
	}
`;
const PageTitleWrapper: React.FC<PageTitleWrapperProps> = ({ handleBackClick, title, subTitle, className, text, image }) => {
	return (
		<Wrapper className={className}>
			<BtnWrapper>
				<BtnIcon icon={"arrow_left"} onClick={handleBackClick} />
			</BtnWrapper>

			<TitleWrapper image={!!image}>
				<SectionTitleCustome title={title} subTitle={subTitle} className={className} text={text} isHalf={!!image} />
				{image && (
					<TitleImage>
						<BackgroundImage image={image} />
					</TitleImage>
				)}
			</TitleWrapper>
		</Wrapper>
	);
};

export default PageTitleWrapper;
