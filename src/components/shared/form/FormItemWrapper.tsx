import { ReactNode } from 'react';
import styled from 'styled-components';

interface FormItemWrapperProps {
  children: ReactNode
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormItemWrapper: React.FC<FormItemWrapperProps> = ({ children, className }) => {
  return (
    <Wrapper className={className}>{children}</Wrapper>
  );
}

export default FormItemWrapper;