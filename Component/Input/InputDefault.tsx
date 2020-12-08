import styled, { css } from "styled-components";
import InputLayout from "./InputLayout";
interface InputDefaultProps {
	label?: string;
	value: string;
	onChange: any;
	type?: string;
	placeholder: string;
	className?: string;
	onEnter?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
	initStyle?: boolean;
}

const Input = styled.input<{ isLabel?: boolean; initStyle?: boolean }>`
	${(props) => props.theme.style.input.item(props.initStyle)};
	${(props) =>
		!props.isLabel &&
		css`
			border-width: ${props.isLabel ? "1px" : "0px"};
			padding-top: 0 !important;
		`};
`;

const InputDefault: React.FC<InputDefaultProps> = ({ initStyle, label, value, onChange, type = "text", placeholder, className, onEnter, onFocus, onBlur }) => {
	const handleKeyDown = (e) => {
		var keyCode = e.which ? e.which : e.keyCode;
		if (keyCode === 13 || keyCode === 188) {
			if (!!onEnter) {
				onEnter();
			}
		}
	};

	const handleFlocus = () => {
		onFocus && onFocus();
	};

	return (
		<InputLayout label={label} className={className} initStyle={initStyle}>
			<Input initStyle={initStyle} type={type} value={value} onChange={onChange} placeholder={placeholder} onKeyDown={handleKeyDown} onFocus={handleFlocus} onBlur={onBlur} isLabel={!!label} />
		</InputLayout>
	);
};

export default InputDefault;
