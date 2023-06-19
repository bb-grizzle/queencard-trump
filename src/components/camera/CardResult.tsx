import * as bodyPix from '@tensorflow-models/body-pix';
import * as tfjs from '@tensorflow/tfjs';
import NextImage from 'next/image';
import { SyntheticEvent, useEffect, useRef } from 'react';
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
  /* clip-path: ${`polygon(0 0, 100% 0%, 100% ${50 - CLIP_GAP}%, 0 ${50 + CLIP_GAP}%);`};  */
`;

const Canvas = styled.canvas`
border: 2px solid red;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colorPalette.bw[100]};
`;

const ImageBottom = styled(ImageClip)`
  transform: rotate(180deg);
`;

const CardResult: React.FC<CardResutlProps> = ({ src }) => {
  const CanvasRef = useRef<HTMLCanvasElement>(null)
  // useEffect(() => {
  //   const set = async () => {

  //       console.log("🌈 start load model")
  //       const net = await bodyfix.load({
  //         // architecture: "ResNet50",
  //         architecture: "MobileNetV1",
  //         outputStride: 32,
  //         quantBytes: 4,
  //       });

  //       console.log("🌈 seperate")
  //       const segmentation = await net.segmentPerson(CanvasRef.current, {
  //         internalResolution: "medium",
  //         segmentationThreshold: 0.3,
  //         // scoreTreshold: 0.7,
  //       });

  //       console.log("🌈 done")
  //       console.log(segmentation)
  //     }

  //   }

  //   set();

  // }, [src])

  useEffect(() => {
    if (!CanvasRef.current) return;
    const ctx = CanvasRef.current.getContext("2d");
    if (!ctx) return;
    const image = new Image();
    image.src = src;
    console.log(src)
    image.onload = function () {
      ctx.canvas.width = image.width;
      ctx.canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

    };
  }, [src])

  const onLoad = async (e: SyntheticEvent<HTMLImageElement>) => {
    tfjs.getBackend();
    const net = await bodyPix.load();

    const segmentation = await net.segmentPerson(e.currentTarget);

    segmentation.data.forEach((segment, i) => {
      if (segment === 1) {

      }
    });
  }

  return (
    <Wrapper>
      <Canvas ref={CanvasRef} />
      {/* <ImageClip src={src} fill={true} alt='card' onLoad={onLoad} /> */}
      {/* <ImageBottom src={src} fill={true} alt='card' /> */}
    </Wrapper>
  );
}

export default CardResult;