import styled from "styled-components";
import InputDefault from "../Component/input/InputDefault";

import useInput from "../Hook/useInput";
import ContainerSmall from "../Layout/ContainerSmall";
import PageContainer from "../Layout/PageContainer";

const Wrapper = styled.div``;

const contact = () => {
	const emailInput = useInput("");
	console.log("contact");
	return (
		<Wrapper>
			<PageContainer>
				<ContainerSmall>
					test
					<InputDefault {...emailInput} placeholder="" label="" />
				</ContainerSmall>
			</PageContainer>
		</Wrapper>
	);
};

export default contact;
