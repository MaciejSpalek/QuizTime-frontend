  
import React from 'react';
import { StyledFormField } from './FormFieldTemplate.styled'

type Props = {
    children: React.ReactNode
}

const FieldFormTemplate = ({ children }: Props) => (
    <StyledFormField>
      {children}
    </StyledFormField>
);


export default FieldFormTemplate;