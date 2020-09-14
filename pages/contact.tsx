import styled from "styled-components";
import InputDefault from "../Component/input/InputDefault";

import useInput from "../Hook/useInput";
import ContainerSmall from "../Layout/ContainerSmall";
import PageContainer from "../Layout/PageContainer";
import InputTextArea from "../Component/input/inputTextarea";
import Submit from "../Component/input/Submit";
import Form from "../Component/input/Form";
import InputRadio from "../Component/input/InputRadio";
import { useEffect } from "react";
import theme from "../Styles/theme";
import Footer from "../Component/Footer";
import emailjs from "emailjs-com";
import { setLoading } from "../Context/AppProvider";

const EMAILPURPOSE = ["협찬", "전시", "구매", "기타"];

const Wrapper = styled.div``;

const contact = () => {
	const emailInput = useInput("");
	const textInput = useInput("");
	const purposeInput = useInput(EMAILPURPOSE[0]);
	const setloading = setLoading();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!emailInput.value || !textInput.value) {
			alert("문의 내용을 채워주세요.");
		}

		try {
			const sendEmail = await emailjs.send(
				"seoseohee",
				"template_h2qxx8q",
				{
					purpose: purposeInput.value,
					email: emailInput.value,
					message: textInput.value.split("\n")
				},
				"user_18oiqb0FPbwshjHk7HsGh"
			);
			if (sendEmail.status === 200) {
				// OK
				alert("이메일이 전송되었습니다. :)");
				emailInput.setValue("");
				textInput.setValue("");
				purposeInput.setValue(EMAILPURPOSE[0]);
			} else {
				alert("이메일 전송이 실패했습니다. :(");
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		setloading(true);
		setTimeout(() => {
			setloading(false);
		}, 500);
	}, []);

	return (
		<Wrapper>
			<PageContainer paddingTop={true}>
				<ContainerSmall>
					<Form onSubmit={handleSubmit}>
						<InputRadio {...purposeInput} label="목적" radios={EMAILPURPOSE} name={"purpose"} />
						<InputDefault {...emailInput} type={"email"} placeholder="eamil@email.com" label="이메일" name={"email"} />
						<InputTextArea {...textInput} placeholder="문의 내용을 작성해주세요." label="내용" name={"message"} />
						<Submit divColor={theme.color.gray.light} />
					</Form>
				</ContainerSmall>
			</PageContainer>
			<Footer />
		</Wrapper>
	);
};

export default contact;
