import styled from "styled-components";
import media from "../../Styles/media";

interface AdminWrapperProps {
	className?: string;
}

const Wrapper = styled.div`
	padding-top: ${(props) => props.theme.size.padding_top_admin.pc};
	padding-bottom: ${(props) => props.theme.size.padding_bottom_admin.pc};

	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.padding_top_admin.mobile};
		padding-bottom: ${(props) => props.theme.size.padding_bottom_admin.mobile};
	}
`;

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default AdminWrapper;
