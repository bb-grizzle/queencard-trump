import { ReactNode } from "react";
import styled from "styled-components";
interface IntroSectionLayoutProps {
	title: string;
	children: ReactNode;
}

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 32px 0;
	border-bottom: 1px solid ${(props) => props.theme.colorPalette.bw[200]};
`;

const SectionTitle = styled.h2``;

const ItemWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

const IntroSectionLayout: React.FC<IntroSectionLayoutProps> = ({ title, children }) => {
	return (
		<Section>
			<SectionTitle>{title}</SectionTitle>
			<ItemWrapper>{children}</ItemWrapper>
		</Section>
	);
};

export default IntroSectionLayout;
