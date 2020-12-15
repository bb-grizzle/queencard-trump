import styled from "styled-components";
import media from "../../Styles/media";
import Paragraph from "../Text/Paragraph";

interface CheckboxItemProps {
	value: string;
	name: string;
	group?: string;
	onChange: (value: string | null) => void;
	className?: string;
}

const CheckboxWrapper = styled.label`
	display: flex;
	align-items: center;
	margin-bottom: 22px;
	text-align: left;
	cursor: pointer;

	${(props) => props.theme.style.hoverDefault};
`;

const InputWrapper = styled.div`
	width: 15px;
	height: 15px;
	border: 1px solid ${(props) => props.theme.color.gray.dark};
	margin-right: 21px;
	flex-shrink: 0;

	@media ${media.tablet} {
		margin-right: 8px;
	}
`;
const Checkbox = styled.input`
	display: none;
	:checked ~ ${InputWrapper} {
		background-color: ${(props) => props.theme.color.main};
	}
`;

const CheckboxText = styled(Paragraph)`
	word-break: break-all;
`;

const CheckboxItem: React.FC<CheckboxItemProps> = ({ value, name, group, onChange, className }) => {
	return (
		<CheckboxWrapper className={className}>
			<Checkbox type="checkbox" value={value} name={group} onChange={() => onChange(value)} />
			<InputWrapper />
			<CheckboxText text={name} size={13} />
		</CheckboxWrapper>
	);
};

export default CheckboxItem;
