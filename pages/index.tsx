import PageContainer from "../Layout/PageLayout";
import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import Title, { TitleType } from "../Component/Text/Title";
import Numbering from "../Component/Numbering";
import Paragraph, { ParagraphType } from "../Component/Text/Paragraph";

const Cover = styled.div<{ image: string }>`
	${(props) => props.theme.layout.ratio(34)};
	${(props) => props.theme.layout.full_image(`${props.image}`)};
`;

const Contents = styled.div``;
const Col = styled.div``;
const Portfolio = () => {
	return (
		<PageContainer>
			<Cover image={"https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />

			<Contents>
				<ContainerLayout>
					<Col>category</Col>
					<Col>list</Col>
				</ContainerLayout>
			</Contents>
		</PageContainer>
	);
};

export default Portfolio;
