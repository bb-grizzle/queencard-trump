import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import { ReactNode } from "react";
import styled from "styled-components";
import PageLayout from "./PageLayout";

interface IntroLayoutProps {
	title: string;
	children: ReactNode;
}

const Wrapper = styled(Container)`
	padding-top: 32px;
`;

const TitleCustom = styled(Title)`
	margin-bottom: 24px;
`;

const IntroLayout: React.FC<IntroLayoutProps> = ({ children, title }) => {
	return (
		<PageLayout title={title} includeHeader={false}>
			<Wrapper>
				<TitleCustom text={title} />
				{children}
			</Wrapper>
		</PageLayout>
	);
};

export default IntroLayout;
