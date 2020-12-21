import Header from "../Component/Default/Header";
import MobileMenu from "../Component/Default/MobileMenu";
import Loading from "../Component/Default/Loading";

const HeaderLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<MobileMenu />
			<Loading />
			{children}
		</div>
	);
};

export default HeaderLayout;
