import styled from "styled-components";
import Title, { TitleType } from "../Text/Title";
import media from "../../Styles/media";
interface TitleSectionProps {
	title: string;
}

const Wrapper = styled.div`
	padding: 8px 0;
	border-bottom: 1px solid ${(props) => props.theme.color.div};
	margin-bottom: 32px;

	@media ${media.tablet} {
		margin-bottom: 20px;
	}
`;
const AdminTitleSection: React.FC<TitleSectionProps> = ({ title }) => {
	return (
		<Wrapper>
			<Title title={title} />
		</Wrapper>
	);
};

export default AdminTitleSection;
