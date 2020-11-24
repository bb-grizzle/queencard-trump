import styled, { css } from "styled-components";

interface NumberingProps {
	number: number;
	className?: string;
	small?: boolean;
}

const Wrapper = styled.div<{ small: boolean }>`
	${(props) =>
		props.small
			? css`
					width: 14px;
					height: 14px;
					font-size: 10px;
			  `
			: css`
					width: 20px;
					font-size: 11px;
					height: 20px;
			  `};

	${(props) => props.theme.layout.center_flex};
	background-color: ${(props) => props.theme.color.main};
	border-radius: 100%;
`;
const Number = styled.p`
	font-weight: 700;
	color: ${(props) => props.theme.color.white};
`;

const Numbering: React.FC<NumberingProps> = ({ number, className, small = false }) => {
	return (
		<Wrapper className={className} small={small}>
			<Number>{number}</Number>
		</Wrapper>
	);
};

export default Numbering;