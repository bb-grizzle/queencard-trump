import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from 'styled-components';
import HomeBtn from "./HomeBtn";
import CardResult from "./CardResult";
import media from "@/styles/media";
import useHomeStep from "@/provider/HomeProvider/useHomeStep";
import { StepEnum } from "@/provider/HomeProvider";
import { FadeLoader } from "react-spinners";
import { color } from "@/styles/theme/color";

const CAMERA_WIDTH = 320;
const CAMERA_WIDTH_MB = 240;
const CAMERA_RATIO_PORTRAIT = 9 / 16;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  height: ${props => props.theme.size.full_height};
`;

const CardWrapper = styled.div`
  width: ${CAMERA_WIDTH}px;
  aspect-ratio: ${CAMERA_RATIO_PORTRAIT};
  border-radius: 16px;
  overflow: hidden;
  isolation: isolate;
  ${props => props.theme.shadow.popup};
  background-color: ${props => props.theme.color.white};

  @media ${media.tablet} {
    width: ${CAMERA_WIDTH_MB}px;
  }
`;

const Video = styled(Webcam)`
  filter: grayscale();
  width: 100%;
  height: 100%;
`;

const VideoLoading = styled.div<{ active: boolean }>`
  ${props => props.theme.layout.full_abs};
  ${props => props.theme.layout.center_flex};
  transform: translateY(${props => props.active ? 0 : 100}%);
  transition: ${props => props.theme.transition.default};
  transition-property: transform;
  background-color: ${props => props.theme.color.black};
`;

const HomeCamera = () => {
  const webcamRef = useRef<any>(null);
  const [capture, setCapture] = useState("")
  const { changeStep, currentStep } = useHomeStep();
  const [videoReady, setVideoReady] = useState(false)

  const onCapture = useCallback(
    () => {
      if (currentStep === StepEnum.READY) {
        if (!webcamRef.current) return;
        changeStep(StepEnum.LOADING)
        const imageSrc = webcamRef.current.getScreenshot();
        setCapture(imageSrc)
      } else if (currentStep === StepEnum.DONE) {
        changeStep(StepEnum.READY)
        setCapture("")
      }
    },
    [webcamRef, currentStep]
  );

  useEffect(() => {
    if (!capture) {
      setVideoReady(false)
    }
  }, [capture])

  return (
    <Wrapper>
      <CardWrapper>
        {capture ?
          <CardResult
            src={capture}
          />
          :
          <Video
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/png"
            mirrored={true}
            videoConstraints={{
              facingMode: "user",
              // aspectRatio: CAMERA_RATIO_LANDSCAPE
              aspectRatio: CAMERA_RATIO_PORTRAIT
            }}
            onLoadStart={() => {
              console.log("onLoadStart")
              setVideoReady(false)
            }}
            onCanPlay={() => {
              console.log("onCanPlay")
              setVideoReady(true)
            }}
          />
        }
        <VideoLoading active={!videoReady}>
          <FadeLoader color={color.white} />
        </VideoLoading>
      </CardWrapper>

      <HomeBtn onClick={onCapture} />
    </Wrapper>
  );
}

export default HomeCamera;