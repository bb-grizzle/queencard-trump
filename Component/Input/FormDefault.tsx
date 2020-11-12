import styled from "styled-components";
import Submit from "./Submit";

const Wrapper = styled.form``;
const FormDefault = ({ children, onSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};
	return (
		<Wrapper onSubmit={handleSubmit}>
			{children}

			<Submit />
		</Wrapper>
	);
};

export default FormDefault;
