import styled from "styled-components";
import theme from "../../Styles/theme";

interface SubmitProps {
	value?: string;
}
const Wrapper = styled.div`
	height: ${(props) => props.theme.size.height_input};
	padding-top: 32px;
	margin-top: 32px;
	position: relative;

	display: flex;

	${(props) => props.theme.div.default(theme.color.gray.default, 1)};
`;

const Input = styled.input`
	cursor: pointer;
	height: 100%;
	display: block;
	background-color: black;
	color: white;
	flex-grow: 1;

	${(props) => props.theme.layout.input_default};
`;

const Submit: React.FC<SubmitProps> = ({ value = "확인" }) => {
	return (
		<Wrapper>
			<Input type="submit" value={value} />
		</Wrapper>
	);
};

export default Submit;
