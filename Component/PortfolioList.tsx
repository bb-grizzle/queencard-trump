import styled, { css } from "styled-components";
import { PortfolioDataProps } from "../Interface/portfolio";
import Title from "./Text/Title";
import Paragraph, { ParagraphType } from "./Text/Paragraph";
import useImageLoad from "../Hook/useImageLoad";
import media from "../Styles/media";

interface PortfolioListProps {
	data: PortfolioDataProps;
	col: number;
	isLast: boolean;
	onClick: (id: string) => void;
}

const Inner = styled.div`
	${(props) => props.theme.layout.full_abs};

	${(props) => props.theme.layout.center_flex};
	flex-direction: column;
	color: ${(props) => props.theme.color.white};
`;

const ColorOverlay = styled.div<{ color: string }>`
	${(props) => props.theme.layout.full_abs};
	background-color: ${(props) => props.color};
	opacity: 0.6;
`;

const ContentsWrapper = styled.div`
	opacity: 0;
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
`;

const Wrapper = styled.li<{ col: number; isLast: boolean }>`
	width: ${(props) => `calc((100% - ${props.theme.size.gap.list * (props.col - 1)}px) / ${props.col})`};
	${(props) => props.theme.layout.ratio(100)};
	position: relative;
	margin-right: ${(props) => `${props.isLast ? 0 : props.theme.size.gap.list}px`};
	margin-bottom: ${(props) => `${props.theme.size.gap.list}px`};
	cursor: pointer;

	@media ${media.hover} {
		&:hover {
			${ContentsWrapper} {
				opacity: 1;
			}
		}
	}
`;

const BackgroundImage = styled.div<{ bg: string; active: boolean }>`
	${(props) => props.theme.layout.full_abs};
	${(props) => props.theme.layout.full_image(props.bg)};
	transition: ${(props) => props.theme.transition.default};
	transition-property: clip-path;
	transition-delay: 0.5s;

	${(props) =>
		!props.active
			? css`
					clip-path: inset(0% 0% 100% 0%);
			  `
			: css`
					clip-path: inset(0% 0% 0% 0%);
			  `};
`;

const PortfolioList: React.FC<PortfolioListProps> = ({ data, col, isLast, onClick }) => {
	const { load } = useImageLoad(data.thumbnail.url);

	return (
		<Wrapper col={col} isLast={isLast} onClick={() => onClick(data.id)}>
			<BackgroundImage bg={data.thumbnail.url} active={load} />
			<ContentsWrapper>
				<ColorOverlay color={data.category.color} />
				<Inner>
					<Paragraph text={data.title} type={ParagraphType.LG} color={"inherit"} />
					<Title title={data.subTitle} color={"inherit"} />
				</Inner>
			</ContentsWrapper>
		</Wrapper>
	);
};

export default PortfolioList;
