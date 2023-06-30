import styled from 'styled-components';
import NextImage from 'next/image';

interface CardLineProps {
  src: string;
}


const Wrapper = styled.div`
  position: absolute;
  ${props => props.theme.layout.center_abs};
  border: 4px solid black;
  width: calc(100% - ${props => props.theme.size.card.offset.pc}px);
  height: calc(100% - ${props => props.theme.size.card.offset.pc}px);
  border-radius: 8px;
  overflow: hidden;
`;

const ImageBack = styled(NextImage)`
  border: 2px solid red;
  ${props => props.theme.layout.center_abs};
  filter: grayscale();
  inset: 50% !important;
  width: calc(100% + 90px) !important;
  height: calc(100% + 90px) !important;
`;

const CardLine: React.FC<CardLineProps> = ({ src }) => {
  return (
    <Wrapper >
      <ImageBack src={src} fill={true} alt='card' />
    </Wrapper>
  );
}

export default CardLine;