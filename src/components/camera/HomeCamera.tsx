import useSize from "@/hook/useSize";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from 'styled-components';
import HomeCameraBtn from "./HomeCameraBtn";
import CardResult from "./CardResult";
import media from "@/styles/media";

const CAMERA_WIDTH = 320;
const CAMERA_WIDTH_MB = 240;
const CAMERA_RATIO_PORTRAIT = 9 / 16;
const CAMERA_RATIO_LANDSCAPE = 16 / 9;

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


const HomeCamera = () => {
  const webcamRef = useRef<any>(null);
  const [capture, setCapture] = useState("")

  const onCapture = useCallback(
    () => {
      if (!webcamRef.current) return;
      const imageSrc = webcamRef.current.getScreenshot();
      setCapture(imageSrc)
    },
    [webcamRef]
  );

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
          />
        }
      </CardWrapper>

      <HomeCameraBtn onClick={onCapture} />
      {/* <CardFrame /> */}
    </Wrapper>
  );
}

export default HomeCamera;