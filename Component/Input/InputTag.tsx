import styled from "styled-components";
import BtnIcon from "../Btn/BtnIcon";
import { InputDefaultProps } from "../../Hook/useInput";
import Paragraph from "../Text/Paragraph";
import media from "../../Styles/media";
interface InputTagProps {
	value: string[];
	placeholder: string;
	onAdd: (input: InputDefaultProps) => void;
	onDelete: (id: number) => void;
	textInput: InputDefaultProps;
}
const Wrapper = styled.div`
	width: 100%;
`;

const Input = styled.input``;

const WrapperInput = styled.div`
	${(props) => props.theme.style.input};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid ${(props) => props.theme.color.black};
`;

const WrapperTag = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 12px;
`;

const Text = styled(Paragraph)``;
const TagList = styled.li`
	padding: 8px;
	background-color: ${(props) => props.theme.color.gray.light};
	margin-right: 8px;
	cursor: pointer;
	margin-bottom: 8px;
	@media ${media.hover} {
		&:hover {
			background-color: ${(props) => props.theme.color.black};
			${Text} {
				color: white;
			}
		}
	}
`;

const InputTag: React.FC<InputTagProps> = ({ textInput, value, onAdd, onDelete, placeholder }) => {
	const handleAddBtnClick = () => {
		onAdd(textInput);
	};

	const handleTagClick = (index) => {
		onDelete(index);
	};

	const handleKeyDown = (e) => {
		if (e.target.value === "," || e.target.value === "") {
			textInput.setValue("");
			return false;
		}

		var keyCode = e.which ? e.which : e.keyCode;
		if (keyCode === 13 || keyCode === 188) {
			onAdd(textInput);
			e.preventDefault();
			return false;
		}
	};

	return (
		<Wrapper>
			<WrapperInput>
				<Input type="text" placeholder={placeholder} {...textInput} onKeyDown={handleKeyDown} />
				<BtnIcon icon="pluse" onClick={handleAddBtnClick} />
			</WrapperInput>

			<WrapperTag>
				{value.map((el, index) => {
					return (
						<TagList key={index} onClick={() => handleTagClick(index)}>
							<Text text={el} />
						</TagList>
					);
				})}
			</WrapperTag>
		</Wrapper>
	);
};

export default InputTag;
