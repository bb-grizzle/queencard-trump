import styled from "styled-components";
const Wrapper = styled.div``;
const Img = styled.img`
	width: 100%;
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;
const DetailImages = ({ images }) => {
	return (
		<Wrapper>
			{images &&
				images.map((el) => {
					return <Img key={el.id} src={el.url} alt={el.id} />;
				})}
		</Wrapper>
	);
};

export default DetailImages;
