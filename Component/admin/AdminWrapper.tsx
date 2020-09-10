import styled from "styled-components";

interface AdminWrapperProps {
	className?: string;
}

const Wrapper = styled.div`
	padding-top: ${(props) => props.theme.size.padding_top_admin.pc};
	padding-bottom: ${(props) => props.theme.size.padding_bottom_admin.pc};
`;

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default AdminWrapper;
