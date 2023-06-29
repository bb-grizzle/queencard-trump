import * as bodyPix from '@tensorflow-models/body-pix';
import * as tfjs from '@tensorflow/tfjs';
import NextImage from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
const CLIP_GAP = 8;

interface CardResutlProps {
  src: string;
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  filter: grayscale();
`;

const ImageClip = styled(NextImage)`
  clip-path: ${`polygon(0 0, 100% 0%, 100% ${50 - CLIP_GAP}%, 0 ${50 + CLIP_GAP}%);`}; 
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colorPalette.bw[100]};
  display: none;
`;

const ImageBottom = styled(ImageClip)`
  transform: rotate(180deg);
`;

const CardResult: React.FC<CardResutlProps> = ({ src }) => {
  const CanvasRef = useRef<HTMLCanvasElement>(null)
  const [filteredSrc, setFilteredSrc] = useState<string>("")

  useEffect(() => {
    const init = async () => {
      // 01. validation
      if (!CanvasRef.current) return;
      const canvas = CanvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 02. set image
      const image = new Image();
      image.src = src;


      // 03. load bodypix
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
      const background = { r: 255, g: 255, b: 255, a: 255 }
      const blur = 0;
      const backgroundDarkeningMask = bodyPix.toMask(personSegmentation, foreground, background);
      bodyPix.drawMask(CanvasRef.current, image, backgroundDarkeningMask, 1, blur)

      const newSrc = canvas.toDataURL()
      setFilteredSrc(newSrc)
    }

    init();
  }, [src])

  return (
    <Wrapper>
      <Canvas ref={CanvasRef} />
      {filteredSrc && <>
        <ImageClip src={filteredSrc} fill={true} alt='card' />
        <ImageBottom src={filteredSrc} fill={true} alt='card' />
      </>}
    </Wrapper>
  );
}

export default CardResult;