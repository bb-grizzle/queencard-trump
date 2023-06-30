import SvgComp from "../shared/SvgComp";
import styled from 'styled-components';

interface CardSymbolProps {
  symbol: SymbolEnum
}

export enum SymbolEnum {
  CLUBS = "clubs",
  DIAMONDS = "diamonds",
  HEARTS = "hearts",
  SPADES = "spades"
}

const Wrapper = styled.div`
  color: red;
`;

const SymboleWrapper = styled.div`
  position: absolute;
  left: ${props => props.theme.size.card.offset.pc / 2 / 4}px; 
  top: ${props => props.theme.size.card.offset.pc / 2 / 4}px;  
  width: ${props => props.theme.size.card.offset.pc / 3}px;
  ${props => props.theme.layout.center_flex};
  gap: 8px;
  flex-direction: column;
  svg{
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.p`
  font-size: 40px;
  font-family: ${props => props.theme.fontFamily.oranienbaum};
`;

const SmallSymbol = styled.div`
  position: absolute;
  left: ${props => props.theme.size.card.offset.pc / 2 + 6}px; 
  top: ${props => props.theme.size.card.offset.pc / 2 + 6}px;  
  width: ${props => props.theme.size.card.offset.pc / 2}px;
  height: ${props => props.theme.size.card.offset.pc / 2}px;

  svg{
    width: 100%;
    height: 100%;
  }
`;

const CardSymbole: React.FC<CardSymbolProps> = ({ symbol }) => {
  return (
    <Wrapper>
      <SymboleWrapper>
        <Text>Q</Text>
        <SvgComp path="trump" name={symbol} />
      </SymboleWrapper>

      <SmallSymbol>
        <SvgComp path="trump" name={symbol} />
      </SmallSymbol>
    </Wrapper>
  );
}

export default CardSymbole;