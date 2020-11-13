import styled from "styled-components";
import Submit from "./Submit";
interface FormDefaultProps {
	onSubmit: () => void;
	icon?: string;
}
const Wrapper = styled.form``;
const FormDefault: React.FC<FormDefaultProps> = ({ children, onSubmit, icon = "arrow_right" }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};
	return (
		<Wrapper onSubmit={handleSubmit}>
			{children}
			<Submit icon={icon} />
		</Wrapper>
	);
};

export default FormDefault;
