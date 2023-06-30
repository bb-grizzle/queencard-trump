import { StepEnum } from '@/provider/HomeProvider';
import useHomeStep from '@/provider/HomeProvider/useHomeStep';
import { HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader'

interface HomeCameraBtnProps extends HTMLAttributes<HTMLButtonElement> {

}

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
`;

const CameraBtnWrapper = styled.button`
  ${props => props.theme.layout.center_abs};
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-color: transparent;
  position: relative;
  cursor: pointer;
  ${props => props.theme.style.hoverStyle};
`;

const CameraButton = styled.div`
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

const BtnLoading = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.layout.center_flex};
  position: relative;
  left: 4px;
`;

const ResetText = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 2px solid black;
  border-radius: 100%;
  ${props => props.theme.layout.center_flex};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 900;
  font-family: ${props => props.theme.fontFamily.oranienbaum};
`;

const HomeBtn: React.FC<HomeCameraBtnProps> = (props) => {
  const { currentStep } = useHomeStep();

  const renderBtn = useCallback(() => {
    switch (currentStep) {
      case StepEnum.READY: {
        return <CameraBtnWrapper  {...props} type="button" >
          <CameraButton />
          <Line />
        </CameraBtnWrapper>
      }
      case StepEnum.LOADING: {
        return <BtnLoading>
          <FadeLoader />
        </BtnLoading>
      }
      case StepEnum.DONE: {
        return <CameraBtnWrapper  {...props} type="button">
          <ResetText>
            Reset!
          </ResetText>
        </CameraBtnWrapper>
      }
      default: return null
    }
  }, [currentStep, props])

  return (
    <Wrapper>
      {renderBtn()}
    </Wrapper>
  );
}

export default HomeBtn;