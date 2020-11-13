import styled from "styled-components";
import Title, { TitleType } from "../Text/Title";
import media from "../../Styles/media";
import BtnText from "../Btn/BtnText";
import { useAdminAction, AdminActionType } from "../../Context/AdminProvider";
interface TitleSectionProps {
	title: string;
}

const Wrapper = styled.div`
	padding: 8px 0;
	border-bottom: 1px solid ${(props) => props.theme.color.div};
	margin-bottom: 32px;
	display: flex;
	justify-content: space-between;

	@media ${media.tablet} {
		margin-bottom: 20px;
	}
`;
const AdminFormTitle: React.FC<TitleSectionProps> = ({ title }) => {
	const { setAdminAction } = useAdminAction();
	const handleCloseClick = () => {
		setAdminAction(null);
	};
	return (
		<Wrapper>
			<Title title={title} type={TitleType.MD} />
			<BtnText text={"닫기"} onClick={handleCloseClick} />
		</Wrapper>
	);
};

export default AdminFormTitle;
