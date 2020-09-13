import styled from "styled-components";
import ExhibitionInfoList from "../ExhibitionInfoList";
import media from "../../Styles/media";

const Wrapper = styled.div`
	margin-bottom: 56px;

	@media ${media.tablet} {
		margin-bottom: 32px;
	}
`;

const DetailInfo = ({ date, location, link }) => {
	return (
		<Wrapper>
			<ExhibitionInfoList icon="date" text={date} />
			<ExhibitionInfoList icon="location" text={location} />
			{link && <ExhibitionInfoList icon="link" text={link} />}
		</Wrapper>
	);
};

export default DetailInfo;
