import { ReactNode } from "react";
import styled from "styled-components";

interface FormButtonWrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;

const FormButtonWrapper: React.FC<FormButtonWrapperProps> = ({ children, className }) => {
  return (
    <Wrapper className={className}>{children}</Wrapper>
  );
}

export default FormButtonWrapper;