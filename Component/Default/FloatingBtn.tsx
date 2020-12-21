import styled from "styled-components";
import ContainerLayout from "../../Layout/ContainerLayout";
import media from "../../Styles/media";
import Link from "next/link";
const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	z-index: ${(props) => props.theme.zIndex.floating};
	height: ${(props) => `${props.theme.size.full_height}px`};
	${(props) => props.theme.event.disable};
`;
const Container = styled(ContainerLayout)`
	position: relative;
`;
const Btn = styled.div`
	position: absolute;
	right: 0;
	top: ${(props) => `${props.theme.size.header.pc / 2}px`};
	transform: translateY(-50%) translateY(6px);
	width: 100px;
	height: 100px;
	border-radius: 100%;
	background-color: ${(props) => props.theme.color.main};
	${(props) => props.theme.layout.center_flex};
	cursor: pointer;
	transition: ${(props) => props.theme.transition.default};
	transition-property: transform;
	${(props) => props.theme.event.active};

	@media ${media.hover} {
		&:hover {
			transform: translateY(-50%) translateY(6px) scale(1.1);
		}
	}

	@media ${media.desktop} {
		top: initial;
		bottom: 64px;
	}

	@media ${media.tablet} {
		width: 80px;
		height: 80px;
		bottom: ${(props) => `${props.theme.size.offset.tablet * 2}px`};
	}
`;

const Text = styled.p`
	text-align: center;
	font-weight: 700;
	font-size: 17px;
	line-height: 1.44;
	color: ${(props) => props.theme.color.white};

	@media ${media.tablet} {
		font-size: 14px;
	}
`;

const FloatingBtn = () => {
	return (
		<Wrapper>
			<Container>
				<Link href={"/contact"}>
					<a>
						<Btn>
							<Text>프로젝트 문의하기</Text>
						</Btn>
					</a>
				</Link>
			</Container>
		</Wrapper>
	);
};

export default FloatingBtn;
