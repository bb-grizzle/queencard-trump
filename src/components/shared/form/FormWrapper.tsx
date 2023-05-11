import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface FormWrapperProps extends HTMLAttributes<HTMLFormElement> {

}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FormWrapper: React.FC<FormWrapperProps> = ({ children, ...rest }) => {
  return (
    <Form {...rest}>{children}</Form>
  );
}

export default FormWrapper;