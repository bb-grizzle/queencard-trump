import styled from 'styled-components';
import NextImage from 'next/image';
import CardSymbole, { SymbolEnum } from './CardSymbole';
import CardLine from './CardLine';
const CLIP_GAP = 8;

interface CardTopProps {
  src: string;
  filteredSrc: string;
  className?: string;
  symbolIndex: number
}



const SYMBOL_ARR = [
  SymbolEnum.CLUBS,
  SymbolEnum.DIAMONDS,
  SymbolEnum.HEARTS,
  SymbolEnum.SPADES,
]

const Wrapper = styled.div`
  ${props => props.theme.layout.full_abs};
  clip-path: ${`polygon(0 0, 100% 0%, 100% ${50 - CLIP_GAP}%, 0 ${50 + CLIP_GAP}%);`}; 
`;

const FrontImage = styled(NextImage)`
  filter: grayscale();
`;



const CardTop: React.FC<CardTopProps> = ({ src, className, filteredSrc, symbolIndex }) => (
  <Wrapper className={className}>
    <CardLine src={src} />
    <FrontImage src={filteredSrc} fill={true} alt='card' />
    <CardSymbole symbol={SYMBOL_ARR[symbolIndex]} />
  </Wrapper>
);

export default CardTop;