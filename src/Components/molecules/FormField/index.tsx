  
import React from 'react';
import { StyledFormField } from './index.styled';

type Props = {
    children: React.ReactNode
}

const FieldForm = ({ children }: Props) => (
    <StyledFormField>
      {children}
    </StyledFormField>
);


export default FieldForm;