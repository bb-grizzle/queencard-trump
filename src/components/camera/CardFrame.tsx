import styled from 'styled-components';
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding-top: ${props => props.theme.size.header.pc + 32}px;
  padding-bottom: ${props => props.theme.size.camera_btn.padding * 2 + props.theme.size.camera_btn.size}px;
  ${props => props.theme.layout.center_flex};
`;

const Svg = styled.svg`
  width: 380px;
  aspect-ratio: 3 / 4;
`;

const Rect = styled.rect`
  width: 100%;
  height: 100%;
  stroke: ${props => props.theme.color.white};
  fill: none;
`;

const CardFrame = () => {
  return (
    <Wrapper>
      <Svg>
        <Rect rx={32} ry={32} />
      </Svg>
    </Wrapper>
  );
}

export default CardFrame;