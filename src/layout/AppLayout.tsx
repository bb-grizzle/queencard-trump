import GlobalDim from "@/components/shared/GlobalDim";
import Header from "@/components/shared/Header";
import MobileMenu from "@/components/shared/MobileMenu";
import { ReactNode } from "react";
import styled from "styled-components";

interface AppLayoutProps {
	children?: ReactNode;
}

const Wrapper = styled.div``;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<GlobalDim />
			<MobileMenu />
			{children}
		</Wrapper>
	);
};

export default AppLayout;
