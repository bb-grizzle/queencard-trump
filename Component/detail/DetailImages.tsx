import styled from "styled-components";
import { useEffect, useState } from "react";
import media from "../../Styles/media";
const Wrapper = styled.div``;
const Img = styled.img`
	width: 100%;
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}

	@media ${media.tablet} {
		margin-bottom: 4px;
	}
`;
const DetailImages = ({ images, setLoaded }) => {
	const [checkImages, setCheckImages] = useState([]);
	useEffect(() => {
		images.forEach((el, index) => {
			setCheckImages((n) => n.concat(false));
			const img = new Image();
			img.onload = () => {
				setCheckImages((n) => n.map((bol, i) => (i === index ? true : bol)));
			};
			img.src = el.url;
		});
	}, []);

	useEffect(() => {
		checkImages.forEach((el, index) => {
			if (!el) return;
			if (index === checkImages.length - 1) {
				setLoaded(true);
			}
		});
	}, [checkImages]);

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
