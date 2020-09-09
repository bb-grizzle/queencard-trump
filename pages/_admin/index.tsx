import styled from "styled-components";
import TitleLg from "../../Component/text/TitleLg";
import ContainerAdminLayout from "../../Layout/ContainerAdminLayout";
import InputDefault from "../../Component/input/InputDefault";
import Submit from "../../Component/input/Submit";
import Form from "../../Component/input/Form";
import useInput from "../../Hook/useInput";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN_QUERY, LOCAL_LOGIN_QUERY, ISLOGIN } from "../../Queries/adminQueries";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const Wrapper = styled.div``;

const Container = styled(ContainerAdminLayout)`
	padding-top: 200px;
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
	const {
		data: { isLoggedIn }
	} = useQuery(ISLOGIN);

	useEffect(() => {
		if (isLoggedIn) {
			push("/_admin/work");
		}
	}, [isLoggedIn]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const {
				data: { login: token }
			} = await loginMutation();

			if (token) {
				logUserIn({ variables: { token } });
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
