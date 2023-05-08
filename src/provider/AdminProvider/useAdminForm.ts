import { useContext } from "react";
import { AdminContext } from ".";
import useAdminAction from "./useAdminAction";

const useAdminForm = () => {
	const { formState, formValidationState } = useContext(AdminContext);
	const { actionToNone, action } = useAdminAction();
	const [form, setForm] = formState;
	const [formValidation, setFormValidation] = formValidationState;
	// const [createMutation] = useMutation(createUserMutaion, {
	// 	update(
	// 		cache,
	// 		{
	// 			data: {
	// 				createUser: { user },
	// 			},
	// 		}
	// 	) {
	// 		cache.modify({
	// 			fields: {
	// 				getUsers(prev = []) {
	// 					const newUser = cache.writeFragment({
	// 						data: { __typename: "User", ...user },
	// 						fragment: gql`
	// 							fragment NewUser on User {
	// 								id
	// 								email
	// 								createdAt
	// 								updatedAt
	// 							}
	// 						`,
	// 					});
	// 					return [...prev, newUser];
	// 				},
	// 			},
	// 		});
	// 	},
	// });

	const changeForm = (form: Object) => {
		setForm(form);
	};

	const changeFormValidation = (val: boolean) => {
		setFormValidation(val);
	};

	return { changeForm, form, changeFormValidation, formValidation };
};

export default useAdminForm;
