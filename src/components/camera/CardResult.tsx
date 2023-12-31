import * as bodyPix from '@tensorflow-models/body-pix';
import * as tfjs from '@tensorflow/tfjs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CardTop from '../card/CardTop';
import Loading from '../shared/Loading';
import useHomeStep from '@/provider/HomeProvider/useHomeStep';
import { StepEnum } from '@/provider/HomeProvider';
import useHomeDownload from '@/provider/HomeProvider/useHomeDownload';

const CLIP_GAP = 8;
const STROKE_WIDTH_BLACK = 0.4;

interface CardResutlProps {
  src: string;
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${props => props.theme.color.white};
`;

const CardBottom = styled(CardTop)`
  transform: rotate(180deg);
`;

const ImageMiddleLine = styled.div`
  ${props => props.theme.layout.full_abs};
  ${props => props.theme.layout.center_abs};
  width: calc(100% - 16px);
  height: 100%;
  transform: translateX(-50%) translateY(-50%);
  background-color: ${props => props.theme.color.black};
  clip-path: ${`polygon(0 ${50 + CLIP_GAP - STROKE_WIDTH_BLACK}%, 
    100% ${50 - CLIP_GAP - STROKE_WIDTH_BLACK}%, 
    100% ${50 - CLIP_GAP + STROKE_WIDTH_BLACK}%, 
    0 ${50 + CLIP_GAP + STROKE_WIDTH_BLACK}%);`}; 
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colorPalette.bw[100]};
  display: none;
`;



const CardResult: React.FC<CardResutlProps> = ({ src }) => {
  const { cardRef } = useHomeDownload()
  const CanvasRef = useRef<HTMLCanvasElement>(null)
  const [filteredSrc, setFilteredSrc] = useState<string>("")
  const [symbolIndex] = useState(Math.floor(Math.random() * 4))
  const { changeStep } = useHomeStep()

  useEffect(() => {
    const init = async () => {
      // 01. validation
      if (!CanvasRef.current) return;
      if (!src) return;
      if (filteredSrc) return;
      const canvas = CanvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 02. set image
      const image = new Image();
      image.src = src;
      image.addEventListener("load", () => {

      })

      // 03. load bodypix
      await tfjs.setBackend("cpu")
      await tfjs.getBackend()
      const net = await bodyPix.load(
        {
          architecture: 'MobileNetV1',
          outputStride: 16,
          multiplier: 0.75,
          quantBytes: 2
        }
      );

      // 04. seperate image
      const personSegmentation = await net.segmentPerson(image, {
        // maxDetections,
        internalResolution: "full",
        segmentationThreshold: 0.7,
        scoreThreshold: 1,
        nmsRadius: 10
      });

      const foreground = { r: 0, g: 0, b: 0, a: 0 }
      const background = { r: 255, g: 0, b: 0, a: 255 }
      const blur = 0.1;
      const backgroundDarkeningMask = bodyPix.toMask(personSegmentation, foreground, background);
      bodyPix.drawMask(CanvasRef.current, image, backgroundDarkeningMask, 1, blur)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pix = imageData.data;

      for (var i = 0, n = pix.length; i < n; i += 4) {
        const [r, g, b, a] = [pix[i], pix[i + 1], pix[i + 2], pix[i + 3]];
        // If its white then change it
        if (r == 255 && g == 0 && b == 0 && a === 255) {
          // Change the white to whatever.
          pix[i] = 0;
          pix[i + 1] = 0;
          pix[i + 2] = 0;
          pix[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);


      const newSrc = canvas.toDataURL()
      setFilteredSrc(newSrc)
    }

    if (src) {
      init();
    } else {
      setFilteredSrc("")
    }
  }, [src])

  useEffect(() => {
    if (filteredSrc) {
      changeStep(StepEnum.DONE)
    }
  }, [filteredSrc])

  return (
    <Wrapper ref={cardRef}>
      <Canvas ref={CanvasRef} />
      {filteredSrc ? <>
        <CardTop src={src} filteredSrc={filteredSrc} symbolIndex={symbolIndex} />
        <CardBottom src={src} filteredSrc={filteredSrc} symbolIndex={symbolIndex} />
        <ImageMiddleLine />
      </> : <Loading />}
    </Wrapper>
  );
}

export default CardResult;