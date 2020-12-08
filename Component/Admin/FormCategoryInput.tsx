import InputOption from "../Input/InputOption";
import styled from "styled-components";
import BtnText from "../Btn/BtnText";
import useInput, { InputDefaultProps } from "../../Hook/useInput";
import InputDefault from "../Input/InputDefault";
import InputColor from "../Input/InputColor";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CategoryProps } from "../../Interface/category";
import theme from "../../Styles/theme";
import InputLayout from "../Input/InputLayout";

interface FormCategoryInputProps {
	value: string;
	onChange: () => void;
	options: any[];
	newCategory: CategoryProps;
	nameInput: InputDefaultProps;
	colorInput: InputDefaultProps;
	setNewCategory: Dispatch<SetStateAction<CategoryProps>>;
	label?: string;
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	${(props) => props.theme.style.input.item()};
`;

const BtnAdd = styled(BtnText)`
	flex-shrink: 0;
	color: ${(props) => props.theme.color.gray.default};
`;

const Row = styled.div`
	display: flex;
	width: 100%;
	border-bottom: 0px;
`;

const Option = styled(InputOption)`
	border: 0px;
`;

const ColorPick = styled(InputColor)`
	flex-grow: 0;
	width: initial;
	padding-left: 24px;
	padding-right: 24px;
	border-bottom: 0px;
	display: inline-block;
`;

const InputText = styled(InputDefault)`
	flex-grow: 1;
`;

const FormCategoryInput: React.FC<FormCategoryInputProps> = ({ label, value, onChange, options, nameInput, colorInput, setNewCategory }) => {
	const [isAddClick, setIsAddClick] = useState(false);

	const cleanup = () => {
		nameInput.init();
		colorInput.init();
	};

	useEffect(() => {
		return cleanup();
	}, []);

	useEffect(() => {
		if (options !== undefined && !!options[0]) {
			setIsAddClick(false);
		} else {
			setIsAddClick(true);
		}
	}, [options]);

	const handleBtnClick = () => {
		setIsAddClick((prev) => {
			if (prev) {
				nameInput.init();
				colorInput.init();
			}
			return !prev;
		});
	};

	useEffect(() => {
		setNewCategory(
			isAddClick
				? {
						name: nameInput.value,
						color: colorInput.value
				  }
				: null
		);
	}, [isAddClick, nameInput.value, colorInput.value]);

	return (
		<InputLayout label={label}>
			<Wrapper>
				{isAddClick ? (
					<Row>
						<ColorPick {...colorInput} initStyle={true} />
						<InputText {...nameInput} placeholder="이름" initStyle={true} />
					</Row>
				) : (
					<Option value={value} onChange={onChange} options={options} />
				)}

				{options !== undefined && !!options[0] && <BtnAdd text={!isAddClick ? "추가" : "취소"} onClick={handleBtnClick} />}
			</Wrapper>
		</InputLayout>
	);
};

export default FormCategoryInput;
