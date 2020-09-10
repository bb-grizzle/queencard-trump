import { useState, createContext, useEffect, useContext } from "react";
import { useMutation } from "@apollo/client";
import { LOCAL_LOGIN_QUERY } from "../Queries/adminQueries";

export const AdminContext = createContext({
	action: null,
	setAction: null
});

export enum ActionType {
	NULL,
	ADD,
	EDIT
}

const AdminProvider: React.FC = ({ children }) => {
	const [action, setAction] = useState(ActionType.NULL);
	const [localLoginQuery] = useMutation(LOCAL_LOGIN_QUERY);

	useEffect(() => {
		if (localStorage) {
			const token = localStorage.getItem("token");

			if (token !== null) {
				localLoginQuery({
					variables: {
						token
					}
				});
			} else {
				return;
			}
		}
	}, []);

	return <AdminContext.Provider value={{ action, setAction }}>{children}</AdminContext.Provider>;
};

export const useAction = () => {
	const { action } = useContext(AdminContext);
	return action;
};

export const setAction = () => {
	const { setAction } = useContext(AdminContext);
	return setAction;
};

export default AdminProvider;
