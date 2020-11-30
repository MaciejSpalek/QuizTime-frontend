import React from 'react';
import { IFormFieldTemplate } from './FormFieldTemplate.model';
import { StyledFormField } from './FormFieldTemplate.styled';



const FieldFormTemplate = ({ children, ...props }: IFormFieldTemplate) => (
    <StyledFormField {...props}>
      {children}
    </StyledFormField>
);


export default FieldFormTemplate;