import styled from "styled-components";
import TitleLg from "../text/TitleLg";
import Paragraph from "../text/Paragraph";
const Wrapper = styled.div<{ type: string }>`
	margin-top: 56px;
	margin-bottom: ${(props) => (props.type === "work" ? "56px" : "32px")};
`;

const Title = styled(TitleLg)`
	margin-bottom: 8px;
`;

const DescriptWrapper = styled.div`
	/* margin-bottom: 56px; */
`;

const Descript = styled(Paragraph)`
	margin-bottom: 0;
	line-height: 1.6;
`;

const DetailText = ({ title, text, date, type }) => {
	return (
		<Wrapper type={type}>
			<Title title={title} />
			<Paragraph text={date} />
			<DescriptWrapper>
				{text.split("\n").map((t, index) => {
					return t ? <Descript key={index} text={t} color="black" /> : <br key={index} />;
				})}
			</DescriptWrapper>
		</Wrapper>
	);
};

export default DetailText;
