import styled from "styled-components";
import BtnIcon from "./Btn/BtnIcon";
import useSliderCount from "../Hook/useSliderCount";
import media from "../Styles/media";
import { useEffect } from "react";
import { useIsIe } from "../Context/AppProvider";

interface ImageSliderProps {
	images: string[];
}
const Wrapper = styled.div`
	${(props) => props.theme.layout.ratio(54)};
	position: relative;
`;

const Slider = styled.ul`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	display: flex;
	overflow: scroll;
	scroll-snap-type: x mandatory;
	${(props) => props.theme.style.hideScroll};
	scroll-behavior: smooth;
`;

const List = styled.li<{ image: string }>`
	${(props) => props.theme.layout.full_image(props.image)};
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	flex-grow: 0;
	scroll-snap-align: center;
`;
const BtnWrapper = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 21px;

	@media ${media.tablet} {
		padding: 0 ${(props) => `${props.theme.size.offset.tablet / 2}px`};
	}
`;
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	const { slider, count, slideDown, slideUp, isScrolling, indecatorClicked } = useSliderCount();
	const { isIe } = useIsIe();

	useEffect(() => {
		if (!isScrolling && isIe) {
			indecatorClicked(count);
		}
	}, [isScrolling, isIe]);

	const handleRightClick = () => {
		slideDown();
	};
	const handleLeftClick = () => {
		slideUp();
	};

	return (
		<Wrapper>
			<Slider ref={slider}>
				{images.map((el, index) => {
					return <List key={index} image={el} />;
				})}
			</Slider>
			{images.length > 1 && (
				<BtnWrapper>
					<BtnIcon onClick={handleRightClick} icon={"arrow_left"} disable={count === 0} />
					<BtnIcon onClick={handleLeftClick} icon={"arrow_right"} disable={images.length - 1 === count} />
				</BtnWrapper>
			)}
		</Wrapper>
	);
};

export default ImageSlider;
