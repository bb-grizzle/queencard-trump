import Header from "../Component/Header";

const HeaderLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default HeaderLayout;
