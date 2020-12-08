import styled from "styled-components";
import { useState } from "react";
interface InputOptionProps {
	value: string;
	onChange: any;
	options: any[];
	className?: string;
}
const Wrapper = styled.div`
	width: 100%;
`;

const Select = styled.select<{ active: boolean }>`
	color: ${(props) => (props.active ? props.theme.color.black : props.theme.color.gray.default)};
`;

const InputOption: React.FC<InputOptionProps> = ({ value, onChange, options, className }) => {
	return (
		<Wrapper className={className}>
			<Select value={value} onChange={onChange} active={!!value}>
				<option value="" disabled>
					category
				</option>
				{options &&
					options.map((el) => {
						return (
							<option key={el.id} value={el.id}>
								{el.name}
							</option>
						);
					})}
			</Select>
		</Wrapper>
	);
};

export default InputOption;
