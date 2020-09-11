import styled from "styled-components";
import TitleMd from "./text/TitleMd";
import Link from "next/link";
import Paragraph from "./text/Paragraph";

const Blur = styled.div`
	${(props) => props.theme.layout.full_abs};
	opacity: 0;
	backdrop-filter: blur(20px);
	transition: ${(props) => props.theme.transition.hover};
`;

const WorkList = styled.li<{ ratio: number; active: any; delay?: number }>`
	width: calc((100% - 32px) / 3);
	margin-bottom: 16px;
	${(props) => props.theme.style.ratio(props.ratio)};

	transition: ${(props) => props.theme.transition.default};
	clip-path: ${(props) => `inset(0% ${props.active ? "0%" : "100%"}  0% 0%);`};
	transition-delay: ${(props) => `${props.delay * 100}ms`};
	> a {
		display: block;
		${(props) => props.theme.layout.full_abs};
	}

	&:hover {
		${Blur} {
			opacity: 1;
		}
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
`;

const List = ({ data, loaded, router }) => {
	const ratio = data.double === undefined && data.double === null ? 100 : data.double === true ? 133 : 74;
	return (
		<WorkList key={data.id} ratio={ratio} delay={loaded && Math.round(Math.random() * 4)} active={loaded ? true : false}>
			<Link href={`/${router}/[id]`} as={`/${router}/${data.id}`}>
				<a>
					<ListWrapper image={data.images[0].url}>
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
