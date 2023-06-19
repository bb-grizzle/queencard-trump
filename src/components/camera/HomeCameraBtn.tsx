import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface HomeCameraBtnProps extends HTMLAttributes<HTMLButtonElement> {

}

const Wrapper = styled.button`
  width: 80px;
  height: 80px;
  background-color: transparent;
  border-color: transparent;
  position: relative;
`;

const Button = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${props => props.theme.color.black};
  border-radius: 100%;
  ${props => props.theme.layout.center_abs};
`;

const Line = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid ${props => props.theme.color.black};
  ${props => props.theme.layout.center_abs};
  border-radius: 100%;
`;

const HomeCameraBtn: React.FC<HomeCameraBtnProps> = (props) => {
  return (
    <Wrapper  {...props} type="button" >
      <Button />
      <Line />
    </Wrapper>
  );
}

export default HomeCameraBtn;