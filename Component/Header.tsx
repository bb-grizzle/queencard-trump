import styled from "styled-components";
import ContainerLayout from "../Layout/ContainerLayout";
import Icon from "../Asset/icon";

const HeaderWrapper = styled.header``;

const Header = () => {
	return (
		<HeaderWrapper>
			<ContainerLayout>
				{/* <Logo>

				</Logo>
				<Gnb>

				</Gnb> */}
				header
				{/* <Logo /> */}
				<Icon name="location" />
			</ContainerLayout>
		</HeaderWrapper>
	);
};

export default Header;
