import styled, { css } from "styled-components";
import { PortfolioDataProps } from "../Interface/portfolio";
import Title from "./Text/Title";
import Paragraph, { ParagraphType } from "./Text/Paragraph";
import useImageLoad from "../Hook/useImageLoad";
import media from "../Styles/media";
import { useEffect, useState } from "react";

interface PortfolioListProps {
	data: PortfolioDataProps;
	col: number;
	isLast: boolean;
	onClick: (id: string) => void;
	parentSize: number;
	className?: string;
	overlay?: boolean;
}

const Inner = styled.div`
	${(props) => props.theme.layout.full_abs};

	${(props) => props.theme.layout.center_flex};
	flex-direction: column;
	color: ${(props) => props.theme.color.white};
	opacity: 0;
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
`;

const ColorOverlay = styled.div<{ color: string; active?: boolean }>`
	${(props) => props.theme.layout.full_abs};
	background-color: ${(props) => props.color};
	opacity: ${(props) => (props.active ? 0.6 : 0)};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity;
`;

const Wrapper = styled.li<{ col: number; isLast: boolean; gap: number }>`
	width: ${(props) => `calc((100% - ${props.gap * (props.col - 1)}px) / ${props.col})`};
	${(props) => props.theme.layout.ratio(100)};
	position: relative;
	margin-right: ${(props) => `${props.isLast ? 0 : props.gap}px`};
	margin-bottom: ${(props) => `${props.gap}px`};
	cursor: pointer;

	@media ${media.hover} {
		&:hover {
			${Inner} {
				opacity: 1;
			}
			${ColorOverlay} {
				opacity: 0.6;
			}
		}
	}
`;

const ContentsWrapper = styled.div``;

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

const PortfolioList: React.FC<PortfolioListProps> = ({ data, col, isLast, onClick, parentSize, className, overlay }) => {
	const { load } = useImageLoad(data.thumbnail.url);
	const [gap, setGap] = useState(parentSize * 0.03);

	useEffect(() => {
		setGap(parentSize * 0.03);
	}, [parentSize]);

	return (
		<Wrapper col={col} isLast={isLast} onClick={() => onClick(data.id)} gap={gap} className={className}>
			<BackgroundImage bg={data.thumbnail.url} active={load} />
			<ContentsWrapper>
				{data.category && data.category.color && <ColorOverlay color={data.category.color} active={overlay} />}
				<Inner>
					<Paragraph text={data.title} type={ParagraphType.LG} color={"inherit"} />
					<Title title={data.subTitle} color={"inherit"} />
				</Inner>
			</ContentsWrapper>
		</Wrapper>
	);
};

export default PortfolioList;
