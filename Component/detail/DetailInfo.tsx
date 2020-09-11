import styled from "styled-components";
import ExhibitionInfoList from "../ExhibitionInfoList";

const Wrapper = styled.div`
	margin-bottom: 56px;
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
