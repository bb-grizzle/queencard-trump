import styled from "styled-components";
import Paragraph from "./Text/Paragraph";
import ContainerLayout from "../Layout/ContainerLayout";
import useSize from "../Hook/useSize";
import media from "../Styles/media";
interface FooterProps {
	className?: string;
}

const Data_footer = [
	"(04768) 서울특별시 성동구 왕십리로 115, 헤이그라운드 서울숲점 G702호 어썸스쿨",
	"",
	"070-7123-1111",
	"평일 : 10:00-17:00",
	"점심시간 : 12:00-13:00",
	"",
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
	> span {
		margin-bottom: 3px;
	}
`;
const Footer: React.FC<FooterProps> = ({ className }) => {
	const { isTablet } = useSize();
	return (
		<Wrapper className={className}>
			{isTablet ? (
				<ContainerLayout>
					<Text text={Data_footer} size={12} />
				</ContainerLayout>
			) : (
				<Text text={Data_footer} size={13} />
			)}
		</Wrapper>
	);
};

export default Footer;