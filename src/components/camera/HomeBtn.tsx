import { StepEnum } from '@/provider/HomeProvider';
import useHomeStep from '@/provider/HomeProvider/useHomeStep';
import { HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader'
import { GrPowerReset, GrDownload } from 'react-icons/gr';
import useHomeDownload from '@/provider/HomeProvider/useHomeDownload';

interface HomeCameraBtnProps extends HTMLAttributes<HTMLButtonElement> {

}

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
`;

const Btn = styled.button`
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

const DoneBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const DoneBtn = styled.button`
  border: none;
  width: 80px;
  height: 80px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 100%;
  ${props => props.theme.style.hoverStyle};
`;

const HomeBtn: React.FC<HomeCameraBtnProps> = (props) => {
  const { currentStep } = useHomeStep();
  const { onDownloadClick } = useHomeDownload()

  const renderBtn = useCallback(() => {
    switch (currentStep) {
      case StepEnum.READY: {
        return <Wrapper><Btn  {...props} type="button" >
          <CameraButton />
          <Line />
        </Btn>
        </Wrapper>
      }
      case StepEnum.LOADING: {
        return <Wrapper><BtnLoading>
          <FadeLoader />
        </BtnLoading></Wrapper>
      }
      case StepEnum.DONE: {
        return <DoneBtnWrapper>
          <DoneBtn {...props}><GrPowerReset /></DoneBtn>
          <DoneBtn onClick={onDownloadClick}><GrDownload /></DoneBtn>
        </DoneBtnWrapper>
      }
      default: return null
    }
  }, [currentStep, props, onDownloadClick])

  return (
    renderBtn()
  );
}

export default HomeBtn;