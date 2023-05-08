import styled from "styled-components";
import Button, { BtnTypeEnum } from "../Button";

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const AdminPopupBtn = () => {
	return (
		<BtnWrapper>
			<Button text="confirm" btnType={BtnTypeEnum.SOLID} />
		</BtnWrapper>
	);
};

export default AdminPopupBtn;
