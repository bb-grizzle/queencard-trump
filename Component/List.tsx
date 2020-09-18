import styled from "styled-components";
import TitleMd from "./text/TitleMd";
import Link from "next/link";
import Paragraph from "./text/Paragraph";
import { useEffect, useState } from "react";
import media from "../Styles/media";
import { useRouter } from "next/dist/client/router";

interface ListProps {
	data: any;
	router: string;
	column?: number;
	onClick?: any;
	mansonry?: boolean;
}

const Blur = styled.div`
	${(props) => props.theme.layout.full_abs};
	opacity: 0;
	backdrop-filter: blur(20px);
	transition: ${(props) => props.theme.transition.hover};
`;

const WorkList = styled.li<{ ratio: number; active: any; delay?: number; column?: number; mansonry?: boolean }>`
	width: ${(props) => `calc((100% - (16px * (${props.column} - 1))) / ${props.column});`};

	position: relative;
	margin-bottom: 16px;
	${(props) => props.theme.style.ratio(props.ratio)};

	transition: ${(props) => props.theme.transition.default};
	clip-path: ${(props) => `inset(0% ${props.active ? "0%" : "100%"}  0% 0%);`};
	transition-delay: ${(props) => `${props.delay * 100}ms`};
	> a {
		display: block;
		${(props) => props.theme.layout.full_abs};
	}

	${(props) =>
		!props.mansonry &&
		`
		&:not(:nth-child(${props.column}n)) {
			margin-right: 16px;
		}
	`};

	@media ${media.hover} {
		&:hover {
			${Blur} {
				opacity: 1;
			}
		}
	}

	@media ${media.tablet} {
		width: calc(50% - 4px);
		margin-bottom: 8px;

		${(props) => `
			&:not(:nth-child(${props.column})) {
				margin-right: 0px;
			}
		`};

		${(props) =>
			!props.mansonry &&
			`&:nth-child(odd) {
			margin-right: 4px;
		}
		&:nth-child(even) {
			margin-left: 4px;
		}`};
	}

	@media ${media.mobile} {
		width: 100%;
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
`;

const ListWrapper = styled.div<{ image: string }>`
	${(props) => props.theme.layout.full_abs};
	${(props) => props.theme.layout.full_image(props.image)};
`;

const Title = styled(TitleMd)`
	margin-bottom: 7px;
	padding-bottom: 7px;
	position: relative;
	${(props) => props.theme.div.bottom("white", 2, "26px")};
`;

const TextWrapper = styled.div`
	${(props) => props.theme.layout.full_abs};
	padding: 16px;
	transition: ${(props) => props.theme.transition.hover};

	@media ${media.tablet} {
		padding: 12px;
	}
`;

const List: React.FC<ListProps> = ({ data, router, column = 3, onClick, mansonry }) => {
	const [loaded, setLoaded] = useState(false);
	const ratio = data.double === undefined && data.double === null ? 100 : data.double === true ? 133 : 74;
	const { push } = useRouter();

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setLoaded(true);
		};
		img.src = Array.isArray(data.images) ? data.images[0].url : data.thumbnail.url;
	}, []);

	const handleListClick = (e: any) => {
		if (router === "work" || router === "exhibition") {
			// push(`/${router}/${data.id}`);
			return;
		} else {
			e.preventDefault();
			onClick();
		}
	};

	return (
		<WorkList mansonry={mansonry} column={column} key={data.id} ratio={ratio} delay={loaded && Math.round(Math.random() * 4)} active={loaded}>
			<Link href={`/${router}/[id]`} as={`/${router}/${data.id}`}>
				<a onClick={handleListClick}>
					<ListWrapper image={Array.isArray(data.images) ? data.images[0].url : data.thumbnail.url}>
						<Blur />
						<TextWrapper>
							<Title title={data.title} color={"white"} />
							<Paragraph text={data.date} color={"white"} />
						</TextWrapper>
					</ListWrapper>
				</a>
			</Link>
		</WorkList>
	);
};

export default List;
