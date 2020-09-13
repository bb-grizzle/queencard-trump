import styled from "styled-components";
import Icon from "../Asset/icon";
import ContainerLayout from "../Layout/ContainerLayout";
import media from "../Styles/media";
const Wrapper = styled.div<{ active: boolean }>`
	opacity: ${(props) => (props.active ? "1" : "0")};
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${(props) => props.theme.zIndex.insperationDetail};
	width: 100%;
	height: ${(props) => props.theme.layout.full_height};

	${(props) =>
		!props.active
			? `
  pointer-events: none;
  user-select: none;
  `
			: `
  pointer-events: auto;
  user-select: auto;
  `};
`;
const Blur = styled.div`
	backdrop-filter: blur(12px);
	${(props) => props.theme.layout.full_abs};
	background-color: rgba(0, 0, 0, 0.6);
`;

const ImageWrapper = styled.div`
	width: 560px;
	height: 560px;
	border: 1px solid white;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 16px;

	background-color: ${(props) => props.theme.color.bg};
	@media ${media.tablet} {
		width: 100%;
		height: 100%;
	}
`;

const ImageView = styled.div<{ image: string }>`
	width: 100%;
	height: 100%;
	background-image: ${(props) => `url('${props.image}')`};
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
`;

const BtnWrapper = styled.div`
	width: 100%;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
`;

const Container = styled(ContainerLayout)`
	display: flex;
	justify-content: space-between;

	@media ${media.tablet} {
		max-width: 100%;
		width: 100%;
		padding: 32px;
	}
`;
const Btn = styled.div`
	background-color: ${(props) => props.theme.color.bg};
	width: 40px;
	height: 40px;
	${(props) => props.theme.layout.center_flex};
	border-radius: 100%;
	cursor: pointer;
	@media ${media.tablet} {
		width: 28px;
		height: 28px;
	}
`;

const BtnClose = styled(Btn)`
	left: initial;
	position: absolute;
	right: 0px;
	top: 0px;
	transform: initial;

	@media ${media.tablet} {
		right: 16px;
		top: 16px;
	}
`;

const InpserationDetail = ({ nowIndex, images, setNowIndex }) => {
	const handleRightClick = () => {
		setNowIndex((n) => (n < images.length - 1 ? n + 1 : 0));
	};

	const handleLeftClick = () => {
		setNowIndex((n) => (n > 0 ? n - 1 : images.length - 1));
	};

	const handleCloseClick = () => {
		setNowIndex(null);
	};

	return (
		<Wrapper active={nowIndex !== null ? true : false}>
			<Blur />
			<ImageWrapper>
				<BtnClose onClick={handleCloseClick}>
					<Icon name="close" />
				</BtnClose>
				<ImageView image={nowIndex !== null ? images[nowIndex].url : ""} />
			</ImageWrapper>
			<BtnWrapper>
				<Container>
					<Btn onClick={handleLeftClick}>
						<Icon name="arrow_left" />
					</Btn>
					<Btn onClick={handleRightClick}>
						<Icon name="arrow_right" />
					</Btn>
				</Container>
			</BtnWrapper>
		</Wrapper>
	);
};

export default InpserationDetail;
