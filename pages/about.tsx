import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import ContainerLayout from "../Layout/ContainerLayout";
import InfoList from "../Component/about/InfoList";
import TitleMd from "../Component/text/TitleMd";
import Paragraph from "../Component/text/Paragraph";
import { useEffect, useState } from "react";
import { bio_en, bio_kr } from "../Data/about";
import { TextLang } from "../interface/interface";
import media from "../Styles/media";
import Footer from "../Component/Footer";
import PageContainer from "../Layout/PageContainer";

const EDUCATION_QUERY = gql`
	{
		getAllInfo {
			id
			field
			year
			text
			priority
			createdAt
		}
	}
`;

const Wrapper = styled.div`
	@media ${media.tablet} {
		padding-top: 16px;
	}
`;

const CoverContainer = styled(ContainerLayout)`
	@media ${media.tablet} {
		max-width: 100%;
	}
`;

const Cover = styled.div`
	padding-top: calc(100% / 3);
	${(props) => props.theme.layout.full_image("/image/cover_01.jpg")}
`;

const InfoContainer = styled(ContainerLayout)`
	margin-top: 64px;
`;

const InfoWrapper = styled.div`
	display: flex;

	@media ${media.tablet} {
		flex-wrap: wrap;
	}
`;

const InfoCol = styled.div`
	width: 50%;
	padding-right: 100px;

	@media ${media.tablet} {
		width: 100%;
		margin-bottom: 32px;
		padding-right: 0;
	}
`;

const Title = styled(TitleMd)`
	margin-bottom: 12px;
	text-transform: capitalize;
`;

const InfoRow = styled.div`
	margin-bottom: 32px;
`;

const ListWrapper = styled.ul``;

const InfoListCustom = styled(InfoList)`
	margin-bottom: 6px;
`;

const index = () => {
	const { data, loading, error } = useQuery(EDUCATION_QUERY);

	const [filteredData, setFilteredData] = useState({
		EDUCATION: [],
		EXHIBITION: [],
		AWARD: []
	});

	useEffect(() => {
		if (!loading) {
			data.getAllInfo.forEach((el) => {
				const field = el.field;
				setFilteredData((n) => ({
					...n,
					[field]: n[field].concat(el)
				}));
			});
		}
	}, [data, loading, error]);

	return (
		<PageContainer>
			<CoverContainer>
				<Cover />
			</CoverContainer>
			<InfoContainer>
				<InfoWrapper>
					<InfoCol>
						<Title title={"Bio -"} />
						<Paragraph text={bio_en} lang={TextLang.EN} />
						<Paragraph text={bio_kr} lang={TextLang.KR} />
					</InfoCol>
					{filteredData && (
						<InfoCol>
							{Object.keys(filteredData).map((key) => {
								return (
									<InfoRow key={key}>
										<Title title={`${key.toLocaleLowerCase()} -`} />
										{filteredData[key].map((list) => {
											return (
												<ListWrapper key={list.id}>
													<InfoListCustom year={list.year} text={list.text} />
												</ListWrapper>
											);
										})}
									</InfoRow>
								);
							})}
						</InfoCol>
					)}
				</InfoWrapper>
			</InfoContainer>
			<Footer />
		</PageContainer>
	);
};

export default index;
