import useInputDefault from "@/hook/input/useInputDefault";
import FormWrapper from "../../form/FormWrapper";
import FormItemWrapper from "../../form/FormItemWrapper";
import InputDefault from "../../Input";
import FormButtonWrapper from "../../form/FormButtonWrapper";
import Button, { BtnTypeEnum } from "../../Button";
import useLogin from "@/provider/AppProvider/useLogin";
import { useMutation } from "@apollo/client";
import { LOGIN_USER_MUTATION } from "@/lib/apollo/users/loginUser";
import useForm from "@/hook/input/useForm";
import { ValidationType } from "@/util/validation";
import { DATA_ERROR } from "@/data/error";

const AdminSignin = () => {
  const { clientLogin } = useLogin()
  const [loginUserMutation, { loading }] = useMutation(LOGIN_USER_MUTATION)

  const emailInputHook = useInputDefault({
    layout: { label: "email" },
    option: {
      placeholder: "test@test.com",
      type: "email"
    },
    validation: ValidationType.EMAIL
  })

  const pwInputHook = useInputDefault({
    layout: { label: "password" }, option: {
      placeholder: "password",
      type: "password"
    },
  })
  const { form, validation } = useForm({ hooks: [emailInputHook, pwInputHook] })

  const onSubmit = async () => {
    if (loading) return;
    if (!validation) return;

    const { data } = await loginUserMutation({ variables: { ...form } })
    const { ok, error, token } = data?.loginUser

    if (!ok) {
      alert(error || DATA_ERROR.default.server)
      return;
    }

    if (token) {
      clientLogin(token)
      return;
    }
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormItemWrapper>
        <InputDefault {...emailInputHook} />
        <InputDefault {...pwInputHook} />
      </FormItemWrapper>
      <FormButtonWrapper>
        <Button text="sign in" btnType={BtnTypeEnum.SOLID} type="submit" onClick={onSubmit} />
      </FormButtonWrapper>
    </FormWrapper>
  );
}

export default AdminSignin;