import styled from "styled-components";
import media from "../Styles/media";

// FILED
const BROWSERLIST = [
	{
		name: "microsoft edge",
		image: "/image/browser/edge.png",
		link: "https://www.microsoft.com/ko-kr/edge",
	},
	{
		name: "google chrome",
		image: "/image/browser/chrome.png",
		link: "https://www.google.co.kr/chrome/?brand=CHBD&gclid=Cj0KCQjw6575BRCQARIsAMp-ksOFtXigc47_HvR4v4kvjPJkUIlMr4yigV3M__yJrMRs43n83KcxJFkaAs4FEALw_wcB&gclsrc=aw.ds",
	},
	{
		name: "opera",
		image: "/image/browser/opera.png",
		link: "https://www.opera.com/ko/download#computer-browsers",
	},
	{
		name: "mozilla firefox",
		image: "/image/browser/firefox.png",
		link: "https://www.mozilla.org/ko/firefox/new/?utm_campaign=supported-browser&utm_medium=referral&utm_source=youtube.com",
	},
];
// STYLED
const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	background-color: ${(props) => props.theme.color.bg};
	z-index: ${(props) => props.theme.zIndex.browser_support};
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TextWrapper = styled.div`
	text-align: center;
	margin-bottom: 2rem;
`;
const Title = styled.h1`
	text-align: center;
	margin-bottom: 1rem;
`;
const Text = styled.p`
	margin-bottom: 0;
	span {
		display: block;
	}
`;
const BrowserWrapper = styled.ul`
	display: flex;
	@media ${media.tablet} {
		flex-wrap: wrap;
		justify-content: center;
	}
`;
const BrowserList = styled.li`
	text-align: center;
	width: 140px;
	/* height: 140px; */
	position: relative;
	margin-right: 0.8rem;
	border-radius: 16px;
	transition: ${(props) => props.theme.transition.default};
	box-shadow: 0 3px 16px -6px rgba(0, 0, 0, 0.2);
	margin-bottom: 0.8rem;
	&:last-child {
		margin-right: 0;
	}
	&:hover {
		/* background-color: rgba(0, 0, 0, 0.08); */
		box-shadow: 0 3px 20px -2px rgba(0, 0, 0, 0.2);
	}

	@media ${media.tablet} {
		width: 80px;
	}
	@media ${media.mobile} {
		width: calc(50% - 32px);
		margin: 0;
		margin-bottom: 16px;
		&:nth-child(even) {
			margin-left: 8px;
		}

		&:nth-child(odd) {
			margin-right: 8px;
		}
	}
`;
const BrowserLink = styled.a`
	display: block;
	${(props) => props.theme.layout.full_abs};
	padding: 1rem;
`;

const BrowserImage = styled.img`
	width: 80%;
`;
const BrowserName = styled.p`
	line-height: 1.5;
	font-size: 0.8rem;
	margin-top: 0.2rem;
	color: gray;
`;

const browser_support = () => {
	return (
		<Wrapper>
			<TextWrapper>
				<Title>브라우저 지원 안내 </Title>
				<Text>해당 브라우저는 지원하지 않습니다.</Text>
				<Text>아래 브라우저를 이용해 보세요.</Text>
			</TextWrapper>
			<BrowserWrapper>
				{BROWSERLIST.map((el, index) => {
					return (
						<BrowserList key={index}>
							<BrowserLink href={el.link}>
								<BrowserImage src={el.image} />
								<BrowserName>{el.name}</BrowserName>
							</BrowserLink>
						</BrowserList>
					);
				})}
			</BrowserWrapper>
		</Wrapper>
	);
};

export default browser_support;