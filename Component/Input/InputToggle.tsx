import styled, { css } from "styled-components";
import Paragraph from "../Text/Paragraph";
const Wrapper = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	${(props) => props.theme.style.input.layout()};
`;

const Toggle = styled.div<{ active: boolean }>`
	width: 56px;
	height: 32px;
	border-radius: 100px;
	position: relative;
	margin-left: 32px;
	background-color: ${(props) => props.theme.color.gray.light};
`;

const ToggleBtn = styled.div<{ active: boolean }>`
	position: absolute;
	top: 50%;

	transform: translateY(-50%);
	width: 28px;
	height: 28px;

	border-radius: 100px;
	transition: ${(props) => props.theme.transition.default};

	${(props) =>
		props.active
			? css`
					left: calc(56px - 28px - 3px);
					background-color: ${(props) => props.theme.color.main};
			  `
			: css`
					left: 1px;
					background-color: ${(props) => props.theme.color.gray.default};
			  `};
`;
const InputToggle = ({ label, value, setValue }) => {
	return (
		<Wrapper onClick={() => setValue((prev) => !prev)}>
			<Paragraph text={label} />
			<Toggle active={value}>
				<ToggleBtn active={value} />
			</Toggle>
		</Wrapper>
	);
};

export default InputToggle;
