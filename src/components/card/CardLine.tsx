import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  ${props => props.theme.layout.center_abs};
  border: 1px solid black;
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  border-radius: 8px;
`;

const CardLine = () => {
  return (
    <Wrapper />
  );
}

export default CardLine;