import Header from "../Components/Default/Header";
import MobileMenu from "../Components/Default/MobileMenu";
import Loading from "../Components/Default/Loading";

const TotalWrapperLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<MobileMenu />
			<Loading />
			{children}
		</div>
	);
};

export default TotalWrapperLayout;
