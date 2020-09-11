import styled from "styled-components";
import Icon from "../../Asset/icon";
import media from "../../Styles/media";

interface IconsProps {
	icon: string;
	onClick: any;
}

interface TitleLgProps {
	title: string;
	className?: string;
	icons?: IconsProps[];
}

const Wrapper = styled.div`
	margin-bottom: 40px;
	display: flex;
	justify-content: space-between;

	@media ${media.tablet} {
		margin-bottom: 24px;
	}
`;

const Title = styled.h3`
	font-weight: 700;
	font-size: 20px;
	line-height: 1.5;
	text-transform: capitalize;
`;

const HoverIcon = styled.div`
	${(props) => props.theme.layout.center_flex};
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;

	clip-path: ellipse(50% 50% at 50% 150%);
	transition: ${(props) => props.theme.transition.default};
`;

const BtnWrapper = styled.div`
	display: flex;
`;

const Btn = styled.div`
	cursor: pointer;
	padding: 4px;
	border-radius: 100%;
	overflow: hidden;
	position: relative;
	margin-left: 4px;

	&:hover {
		${HoverIcon} {
			clip-path: ellipse(50% 50% at 50% 50%);
		}
	}
`;

const TitleLg: React.FC<TitleLgProps> = ({ title, className, icons }) => (
	<Wrapper className={className}>
		<Title>{title}</Title>

		<BtnWrapper>
			{icons &&
				icons.map((el) => (
					<Btn onClick={el.onClick} key={el.icon}>
						<Icon name={el.icon} color={"black"} />
						<HoverIcon>
							<Icon name={el.icon} color={"white"} />
						</HoverIcon>
					</Btn>
				))}
		</BtnWrapper>
	</Wrapper>
);

export default TitleLg;
