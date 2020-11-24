import styled from "styled-components";
import BtnIcon from "../Btn/BtnIcon";
import media from "../../Styles/media";
interface SubmitProps {
	value?: string;
	className?: string;
	icon: string;
}
const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Input = styled.input`
	background-color: ${(props) => props.theme.color.main};
	display: none;
`;

const LabelWrapper = styled.label`
	display: inline-block;
	justify-content: flex-end;
`;

const SubmitBtn = styled(BtnIcon)`
	@media ${media.tablet} {
		width: 32px;
		height: 32px;
	}
	@media ${media.hover} {
		&:hover {
			transform: scale(1.1);
		}
	}
`;

const Submit: React.FC<SubmitProps> = ({ value = "저장", className, icon }) => {
	return (
		<Wrapper className={className}>
			<LabelWrapper>
				<Input type="submit" value={value} />
				<SubmitBtn icon={icon} size={40} />
			</LabelWrapper>
		</Wrapper>
	);
};

export default Submit;
