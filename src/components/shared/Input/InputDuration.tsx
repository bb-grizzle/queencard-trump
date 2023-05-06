import InputLayout from "@/layout/InputLayout";
import InputItemWrapper from "./InputItemWrapper";
import styled from "styled-components";
import { UseInputDurationResultType } from "@/types/input/duration";

interface InputDurationProps extends UseInputDurationResultType {}

const ItemCustom = styled(InputItemWrapper)`
	gap: 16px;
`;

const Input = styled.input``;

const InputDuration: React.FC<InputDurationProps> = ({ layout, startOption, endOption, startValue, onStartChange, endValue, onEndChange }) => {
	return (
		<InputLayout {...layout}>
			<ItemCustom>
				<Input {...startOption} type="date" value={startValue} max={endValue ?? ""} onChange={onStartChange} />
				~
				<Input {...endOption} type="date" value={endValue} min={startValue ?? ""} onChange={onEndChange} />
			</ItemCustom>
		</InputLayout>
	);
};

export default InputDuration;
