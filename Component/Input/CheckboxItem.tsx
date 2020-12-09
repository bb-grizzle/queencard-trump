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

const Checkbox = styled.input`
	width: 15px;
	height: 15px;
	flex-shrink: 0;
	border: 1px solid ${(props) => props.theme.color.gray.dark};
	margin-right: 21px;

	:checked {
		background-color: ${(props) => props.theme.color.main};
	}
	@media ${media.tablet} {
		margin-right: 8px;
	}
`;

const CheckboxText = styled(Paragraph)`
	word-break: break-all;
`;

const CheckboxItem: React.FC<CheckboxItemProps> = ({ value, name, group, onChange, className }) => {
	return (
		<CheckboxWrapper className={className}>
			<Checkbox type="checkbox" value={value} name={group} onChange={() => onChange(value)} />
			<CheckboxText text={name} size={13} />
		</CheckboxWrapper>
	);
};

export default CheckboxItem;
