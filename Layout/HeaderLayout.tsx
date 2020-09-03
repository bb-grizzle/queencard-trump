import Header from "../Component/Header";
import Loading from "../Component/loading";

const HeaderLayout: React.FC = ({ children }) => {
	return (
		<div>
			<Loading />
			<Header />
			{children}
		</div>
	);
};

export default HeaderLayout;
