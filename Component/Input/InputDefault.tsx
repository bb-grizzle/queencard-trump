import styled from "styled-components";
import InputLayout from "./InputLayout";
import { useEffect } from "react";
import inputPhoneNumber from "../../util/formCheck";
interface InputDefaultProps {
	label?: string;
	value: string | number;
	onChange: any;
	type?: string;
	placeholder: string;
	className?: string;
	onEnter?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
	initStyle?: boolean;
	fontsize?: number;
	setValue: any;
	maxLength?: number;
}

const Input = styled.input<{ initStyle?: boolean; fontsize?: number }>`
	${(props) => props.theme.style.input.item};
`;

const InputDefault: React.FC<InputDefaultProps> = ({ maxLength, initStyle, label, value, setValue, onChange, type = "text", placeholder, className, onEnter, onFocus, onBlur, fontsize }) => {
	const handleKeyDown = (e) => {
		var keyCode = e.which ? e.which : e.keyCode;
		if (keyCode === 13 || keyCode === 188) {
			if (!!onEnter) {
				onEnter();
			}
		}
	};

	useEffect(() => {
		if (type === "date") {
			var local = new Date();
			local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
			const nowDate = local.toJSON().slice(0, 10);
			setValue(nowDate);
		}
	}, [type]);

	const handleFlocus = () => {
		onFocus && onFocus();
	};

	const handleChange = (e) => {
		onChange(type === "tel" ? inputPhoneNumber(e.target.value) : e.target.value);
	};

	console.log(value);

	return (
		<InputLayout label={label} className={`${className}`} initStyle={initStyle}>
			<Input
				fontsize={fontsize}
				initStyle={initStyle}
				type={type}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				onKeyDown={handleKeyDown}
				onFocus={handleFlocus}
				onBlur={onBlur}
				maxLength={maxLength}
			/>
		</InputLayout>
	);
};

export default InputDefault;
