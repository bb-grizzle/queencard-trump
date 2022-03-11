import styled from "styled-components";
import InputLayout from "./InputLayout";
import Paragraph from "../Text/Paragraph";
import media from "../../Styles/media";
interface InputRadioProps {
	value: string;
	onChange: any;
	option: any[];
	label?: string;
	caption?: string;
}
const Wrapper = styled.ul`
	${(props) => props.theme.componentStyle.input.item};
	color: ${(props) => props.theme.color.gray[500]};
	display: flex;
	flex-wrap: wrap;
	text-align: left;
`;

const RadioWrapper = styled.label`
	display: flex;
	align-items: center;
	width: 25%;
	margin-bottom: 22px;
	${(props) => props.theme.componentStyle.hoverDefault};

	@media ${media.tablet} {
		width: 50%;
	}
`;

const Radio = styled.div`
	width: 15px;
	height: 15px;
	border: 1px solid ${(props) => props.theme.color.gray[500]};
	margin-right: 21px;
	flex-shrink: 0;

	@media ${media.tablet} {
		margin-right: 8px;
	}
`;

const RadioInput = styled.input`
	width: 15px;
	height: 15px;
	border: 1px solid ${(props) => props.theme.color.gray[500]};
	margin-right: 21px;
	flex-shrink: 0;
	display: none;
	:checked ~ ${Radio} {
		background-color: ${(props) => props.theme.color.main};
	}

	@media ${media.tablet} {
		margin-right: 8px;
	}
`;

const RadioText = styled(Paragraph)`
	word-break: break-all;
`;

const InputRadio: React.FC<InputRadioProps> = ({ option, onChange, label, caption }) => {
	return (
		<InputLayout label={label} caption={caption}>
			<Wrapper>
				{option.map((el, index) => {
					return (
						<RadioWrapper key={index}>
							<RadioInput type="Radio" value={el.name} name={label} onChange={onChange} />
							<Radio />
							<RadioText text={el.name} size={13} />
						</RadioWrapper>
					);
				})}
			</Wrapper>
		</InputLayout>
	);
};

export default InputRadio;
