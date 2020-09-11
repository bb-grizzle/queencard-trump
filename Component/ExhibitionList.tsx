import styled from "styled-components";
import TitleMd from "./text/TitleMd";
import Paragraph from "./text/Paragraph";

import ExhibitionInfoList from "./ExhibitionInfoList";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ExhibitionListProps {
	id: string;
	date: string;
	gallery: string;
	link: string;
	location: string;
	title: string;
	image: string;
}

const Blur = styled.div`
	${(props) => props.theme.layout.full_abs};
	backdrop-filter: blur(20px);
	opacity: 0;
	transition: ${(props) => props.theme.transition.hover};
`;
const Wrapper = styled.li<{ active: boolean }>`
	margin-bottom: 26px;

	clip-path: ${(props) => `inset(0% ${props.active ? "0%" : "100%"}  0% 0%);`};
	transition: ${(props) => props.theme.transition.default};
	position: relative;

	> a {
		display: block;
		display: flex;
	}

	&:hover {
		${Blur} {
			opacity: 1;
		}
	}
`;

const Col = styled.div`
	width: 50%;
`;
const ColRight = styled(Col)`
	margin-left: 8px;
	padding: 12px 0;
`;

const ColLeft = styled(Col)`
	margin-right: 8px;
	position: relative;
	min-height: 215px;
`;

const Thumbnail = styled.div<{ image: string }>`
	${(props) => props.theme.layout.full_abs};
	${(props) => props.theme.layout.full_image(props.image)};
`;

const InfoWrapper = styled.ul``;

const ExhibitionList: React.FC<ExhibitionListProps> = ({ id, date, gallery, link, location, title, image }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setLoaded(true);
		};
		img.src = image;
	}, []);

	return (
		<Wrapper active={loaded}>
			<Link href={"/exhibition/[id]"} as={`/exhibition/${id}`}>
				<a>
					<ColLeft>
						<Thumbnail image={image} />
						<Blur />
					</ColLeft>
					<ColRight>
						<TitleMd title={title} />
						<Paragraph text={gallery} />

						<InfoWrapper>
							<ExhibitionInfoList text={date} icon={"date"} />
							<ExhibitionInfoList text={location} icon={"location"} />
							{link && <ExhibitionInfoList text={link} icon={"link"} />}
						</InfoWrapper>
					</ColRight>
				</a>
			</Link>
		</Wrapper>
	);
};

export default ExhibitionList;
