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
import { setLoading } from "../../Context/AppProvider";

const Wrapper = styled.div``;

const Container = styled(ContainerAdminLayout)`
	padding-top: 200px;
	@media screen {
		padding-top: ${(props) => props.theme.size.padding_top_admin.mobile};
	}
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
	const setloading = setLoading();

	useEffect(() => {
		setloading(false);
	}, []);

	useEffect(() => {
		if (isLoggedIn) {
			push("/_admin/work");
		}
	}, [isLoggedIn]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setloading(true);
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
		setloading(false);
	};

	return (
		<Wrapper>
			<Container>
				<TitleLg title="log in" />

				<Form onSubmit={handleSubmit}>
					<InputDefault {...emailInput} label="id" placeholder="id" type="email" />
					<InputDefault {...pwInput} label="password" placeholder="password" type="password" />
					<Submit />
				</Form>
			</Container>
		</Wrapper>
	);
};

export default login;
