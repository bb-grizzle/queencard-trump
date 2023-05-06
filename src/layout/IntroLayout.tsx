import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import { ReactNode } from "react";
import styled from "styled-components";
import PageLayout from "./PageLayout";
import Button from "@/components/shared/Button";
import { IconName } from "@/types/icon";
import { useRouter } from "next/router";

interface IntroLayoutProps {
	title: string;
	children: ReactNode;
	backBtn?: boolean;
}

const Wrapper = styled(Container)`
	position: relative;
	padding-top: 32px;
`;

const BackBtn = styled(Button)`
	margin-bottom: 16px;
`;

const TitleCustom = styled(Title)`
	margin-bottom: 24px;
`;

const IntroLayout: React.FC<IntroLayoutProps> = ({ children, title, backBtn = true }) => {
	const { back } = useRouter();
	return (
		<PageLayout title={title} includeHeader={false}>
			<Wrapper>
				{backBtn && <BackBtn text="back" iconName={IconName.ARROW_LEFT} onClick={back} />}
				<TitleCustom text={title} />
				{children}
			</Wrapper>
		</PageLayout>
	);
};

export default IntroLayout;
