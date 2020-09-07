import styled from "styled-components";

interface FormProps {
	onSubmit: any;
}
const Wrapper = styled.form``;

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
	return <Wrapper onSubmit={onSubmit}>{children}</Wrapper>;
};

export default Form;
