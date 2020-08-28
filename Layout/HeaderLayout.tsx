import Header from "../Component/Header";

const HeaderLayout: React.FC = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default HeaderLayout;
