import styled from "styled-components";
import TitleMd from "../text/TitleMd";

interface adminListProps {
	id: string;
	title: string;
	image: string;
	date?: string;
	onClick?: any;
}

const Wrapper = styled.li`
	width: 50%;
	position: relative;
	cursor: pointer;

	&:after {
		content: "";
		padding-top: 100%;
		display: block;
	}
`;

const Inner = styled.div`
	position: absolute;
	height: calc(100% - 16px);
	width: calc(100% - 16px);
	top: 8px;
	left: 8px;
`;

const TextWrapper = styled.div`
	backdrop-filter: blur(10px);
	position: absolute;
	width: 100%;
	padding: 8px;
	height: 100%;
	opacity: 0;
	transition: ${(props) => props.theme.transition.default};
	&:hover {
		opacity: 1;
	}
`;

const BackgroundImage = styled.div<{ image: string }>`
	position: absolute;
	${(props) => props.theme.layout.full_image(props.image)};
	width: 100%;
	height: 100%;
`;

const Title = styled(TitleMd)`
	text-transform: capitalize;
	font-weight: bold;

	&:after {
		content: "";
		display: block;
		width: 26px;
		height: 2px;
		background-color: black;
		margin-top: 10px;
	}
`;

const Date = styled.p`
	margin-top: 12px;
`;

const adminList: React.FC<adminListProps> = ({ id, title, image, date, onClick }) => {
	return (
		<Wrapper id={id} onClick={onClick}>
			<Inner>
				<BackgroundImage image={image} />
				<TextWrapper>
					<Title title={title} />
					{date && <Date>{date}</Date>}
				</TextWrapper>
			</Inner>
		</Wrapper>
	);
};

export default adminList;
