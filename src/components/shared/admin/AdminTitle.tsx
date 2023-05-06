import styled from "styled-components";
import Button from "../Button";
import { IconName } from "@/types/icon";

interface AdminTitleProps {
	text: string;
}

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 32px;
`;

const Text = styled.h1`
	${(props) => props.theme.fontStyle.display.small};
`;

const AdminTitle: React.FC<AdminTitleProps> = ({ text }) => {
	return (
		<Wrapper>
			<Text>{text}</Text>
			<Button iconName={IconName.ADD} />
		</Wrapper>
	);
};

export default AdminTitle;
