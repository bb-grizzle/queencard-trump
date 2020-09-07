import styled from "styled-components";
import TitleLg from "../../Component/text/TitleLg";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import InputDefault from "../../Component/input/InputDefault";
import Submit from "../../Component/input/Submit";
import Form from "../../Component/input/Form";
import useInput from "../../Hook/useInput";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useMutation } from "@apollo/client";
import { LOGIN_QUERY, LOCAL_LOGIN_QUERY } from "../../Queries/adminQueries";
import { useisAdminLogin, adminLogin } from "../../Context/AdminProvider";

const Wrapper = styled.div``;

const Container = styled(ContainerAdminLayout)`
	margin-top: 100px;
`;

const login = () => {
	const emailInput = useInput("");
	const pwInput = useInput("");
	const { push } = useRouter();
	const [loginMutation] = useMutation(LOGIN_QUERY, {
		variables: {
			email: emailInput.value,
			password: pwInput.value
		}
	});
	const [logUserIn] = useMutation(LOCAL_LOGIN_QUERY);
	const isLogin = useisAdminLogin();
	const localLogin = adminLogin();

	useEffect(() => {
		console.log(isLogin);
		if (isLogin) {
			push("/_admin/work");
		}
	}, [isLogin]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const {
				data: { login }
			} = await loginMutation();

			if (login) {
				logUserIn({ variables: { token: login } });
				localLogin(true);
			}
		} catch (err) {
			console.log(err);
			alert("아이디와 비밀번호를 확인해주세요. ");
		}
	};

	return (
		<Wrapper>
			<Container>
				<TitleLg title="log in" />

				<Form onSubmit={handleSubmit}>
					<InputDefault {...emailInput} label="id" placeholder="id" />
					<InputDefault {...pwInput} label="password" placeholder="password" type="password" />
					<Submit />
				</Form>
			</Container>
		</Wrapper>
	);
};

export default login;
