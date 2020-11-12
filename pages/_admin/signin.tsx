import PageContainer from "../../Layout/PageLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import TitleSection from "../../Component/Admin/AdminTitleSection";
import InputDefault from "../../Component/Input/InputDefault";
import useInput from "../../Hook/useInput";
import FormDefault from "../../Component/Input/FormDefault";
import { fbSignin } from "../../Firebase/firebase";
import { useIsLoggedIn, useLoading } from "../../Context/AppProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

const signin = () => {
	const { isLoggedIn } = useIsLoggedIn();
	const { setLoading } = useLoading();
	const emailInput = useInput("");
	const pwInput = useInput("");
	const handleSubmit = async () => {
		try {
			setLoading(true);
			const res = await fbSignin(emailInput.value, pwInput.value);
			if (!res) {
				alert("이메일 혹은 비밀번호가 틀렸어요. 😟");
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	const { push } = useRouter();

	useEffect(() => {
		if (isLoggedIn) {
			push("/_admin/portfolio");
		}
	}, [isLoggedIn]);

	return (
		<PageContainer>
			<ContainerLayout small={true}>
				<TitleSection title={"Sign In"} />

				<FormDefault onSubmit={handleSubmit}>
					<InputDefault {...emailInput} placeholder="email" type="email" />
					<InputDefault {...pwInput} placeholder="password" type="password" />
				</FormDefault>
			</ContainerLayout>
		</PageContainer>
	);
};

export default signin;
