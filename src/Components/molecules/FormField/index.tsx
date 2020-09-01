  
import React from 'react';
import { StyledFormField } from './index.styled';

interface Props {
    children: React.ReactNode
}

const FieldForm: React.FC<Props> = ({ children }) => (
    <StyledFormField>
      {children}
    </StyledFormField>
);


export default FieldForm;