import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";

export type AppContextProps = {
	isLoggedInState: [boolean | null, Dispatch<SetStateAction<boolean | null>>];
	globalDimState: [boolean, Dispatch<SetStateAction<boolean>>];
	globalDimOnClick: MutableRefObject<any>;
	isMenuClickState: [boolean, Dispatch<SetStateAction<boolean>>];
};
