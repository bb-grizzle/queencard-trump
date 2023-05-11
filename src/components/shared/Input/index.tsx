import InputLayout from "@/layout/InputLayout";
import styled from "styled-components";
import InputItemWrapper from "./InputItemWrapper";
import Button from "../Button";
import { UseInputDefaultResultType } from "@/types/input/default";

interface InputDefaultProps extends UseInputDefaultResultType {}

const Input = styled.input`
	width: 100%;
`;

const ItemCustom = styled(InputItemWrapper)`
	display: flex;
`;

const InputDefault: React.FC<InputDefaultProps> = ({ layout, option, value, button, onChange }) => {
	return (
		<InputLayout {...layout}>
			<ItemCustom>
				<Input {...option} value={value} onChange={onChange} />
				<Button {...button} />
			</ItemCustom>
		</InputLayout>
	);
};

export default InputDefault;
