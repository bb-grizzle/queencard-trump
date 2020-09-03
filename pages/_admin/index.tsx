import styled from "styled-components";
import TitleLg from "../../Component/text/TextLg";
import ContainerLayout from "../../Layout/ContainerLayout";

const Wrapper = styled.div``;

const login = () => {
	return (
		<Wrapper>
			<ContainerLayout>
				<TitleLg title="log in" />
			</ContainerLayout>
		</Wrapper>
	);
};

export default login;
