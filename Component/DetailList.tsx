import styled from "styled-components";
import Title from "./Text/Title";
import Paragraph from "./Text/Paragraph";
import Numbering from "./Numbering";
import ImageSlider from "./ImageSlider";
interface DetailListProps {
	number?: number;
	title: string;
	text?: string;
	image: any[] | any;
}

const Wrapper = styled.li`
	&:not(:last-child) {
		margin-bottom: 56px;
	}
`;

const TextWrapper = styled.div`
	margin-bottom: 32px;
	color: ${(props) => props.theme.color.gray.dark};
`;

const TitleCustome = styled(Title)<{ margin?: number }>`
	margin-bottom: ${(props) => (props.margin ? `${props.margin}px` : 0)};
`;

const ListNumbering = styled(Numbering)`
	margin-bottom: 10px;
`;

const DetailList: React.FC<DetailListProps> = ({ title, image, text, number }) => {
	return (
		<Wrapper>
			{!!text ? (
				<TextWrapper>
					<ListNumbering number={number} />
					<TitleCustome title={title} isRegular={true} margin={26} />
					<Paragraph text={text} />
				</TextWrapper>
			) : (
				<TextWrapper>
					<TitleCustome title={title} />
				</TextWrapper>
			)}

			<ImageSlider images={image} />
		</Wrapper>
	);
};

export default DetailList;
