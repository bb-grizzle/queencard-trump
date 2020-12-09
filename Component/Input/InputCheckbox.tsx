import styled from "styled-components";
import InputLayout from "./InputLayout";
import CheckboxItem from "./CheckboxItem";
import media from "../../Styles/media";

interface InputCheckboxProps {
	value: string;
	onChange: (value: string) => void;
	option: any[];
	label?: string;
	caption?: string;
}
const Wrapper = styled.ul`
	${(props) => props.theme.style.input.item()};
	color: ${(props) => props.theme.color.gray.dark};
	display: flex;
	flex-wrap: wrap;
	text-align: left;
`;

const CheckboxItemCustome = styled(CheckboxItem)`
	width: 25%;

	@media ${media.tablet} {
		width: 50%;
	}
`;

const InputCheckbox: React.FC<InputCheckboxProps> = ({ option, onChange, label, caption }) => {
	return (
		<InputLayout label={label} caption={caption}>
			<Wrapper>
				{option.map((el, index) => {
					return <CheckboxItemCustome {...el} key={index} onChange={onChange} />;
				})}
			</Wrapper>
		</InputLayout>
	);
};

export default InputCheckbox;
