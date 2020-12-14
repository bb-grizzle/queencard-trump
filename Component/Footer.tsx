import styled from "styled-components";
import Paragraph from "./Text/Paragraph";
import ContainerLayout from "../Layout/ContainerLayout";
import useSize from "../Hook/useSize";
import media from "../Styles/media";
import ColWrapper from "./Col/ColWrapper";
import ColDefault from "./Col/ColDefault";
import Logo from "./Logo";
interface FooterProps {
	className?: string;
}

const Data_footer = [
	"(04768) 서울특별시 성동구 왕십리로 115, 헤이그라운드 서울숲점 G702호 어썸스쿨",
	"문의: 070-7123-1111 / 평일: 10:00-17:00, 점심시간 : 12:00-13:00",
	"매주 화요일 10:00-12:00는 회사 전체회의로 전화응대가 어려운 점 양해바랍니다."
];

const Wrapper = styled.footer`
	margin-top: 120px;
	color: ${(props) => props.theme.color.gray.dark};

	@media ${media.tablet} {
		margin-top: 64px;
	}
`;

const Text = styled(Paragraph)`
	line-height: 1.46;
	margin-left: 32px;
	> span {
		margin-bottom: 3px;
	}

	@media ${media.mobile} {
		margin-left: 0px;
		margin-top: 16px;

		> span {
			margin-bottom: 12px;
		}
	}
`;

const ColFooter = styled(ColDefault)`
	${(props) => props.theme.layout.center_flex};

	@media ${media.mobile} {
		flex-direction: column;
		align-items: flex-start;
	}
`;
const Footer: React.FC<FooterProps> = ({ className }) => {
	const { isTablet } = useSize();
	return (
		<Wrapper className={className}>
			<ContainerLayout>
				<ColWrapper>
					<ColDefault col={!isTablet ? 25 : 0} />
					<ColFooter col={!isTablet ? 75 : 100}>
						<Logo />
						<Text text={Data_footer} size={12} />
					</ColFooter>
				</ColWrapper>
			</ContainerLayout>
		</Wrapper>
	);
};

export default Footer;
