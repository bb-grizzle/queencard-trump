import Header from "../Component/Header";
import MobileMenu from "../Component/MobileMenu";

const HeaderLayout = ({ children }) => {
	return (
		<>
			<Header />
			<MobileMenu />
			{children}
		</>
	);
};

export default HeaderLayout;
