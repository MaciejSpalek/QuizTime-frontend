import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledFormField } from './FormFieldTemplate.styled';

const FieldFormTemplate = ({ children, ...props }: IChildren) => (
    <StyledFormField {...props}>
      {children}
    </StyledFormField>
);

export default FieldFormTemplate;