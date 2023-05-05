import styled from "styled-components";

interface AdminTitleProps {
	text: string;
}

const Text = styled.h1`
	${(props) => props.theme.fontStyle.display.small};
`;

const AdminTitle: React.FC<AdminTitleProps> = ({ text }) => {
	return <Text>{text}</Text>;
};

export default AdminTitle;
