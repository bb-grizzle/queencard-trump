import styled from "styled-components";
import theme from "../../Styles/theme";
import media from "../../Styles/media";

interface SubmitProps {
	value?: string;
	divColor?: string;
}
const Wrapper = styled.div<{ divColor?: string }>`
	height: ${(props) => props.theme.size.height_input};
	padding-top: 32px;
	margin-top: 32px;
	position: relative;

	display: flex;
	transition: ${(props) => props.theme.transition.default};
	box-sizing: content-box;

	@media ${media.hover} {
		${(props) => props.theme.div.default(`${props.divColor ? props.divColor : theme.color.gray.default}`, 1)};
	}
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

const Submit: React.FC<SubmitProps> = ({ value = "확인", divColor }) => {
	return (
		<Wrapper divColor={divColor}>
			<Input type="submit" value={value} />
		</Wrapper>
	);
};

export default Submit;
