import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledFormField } from './FormFieldTemplate.styled';

const FieldFormTemplate = ({ children, ...props }: IChildren) => (
    <StyledFormField data-testid="FormFieldTemplate" {...props}>
      {children}
    </StyledFormField>
);

export default FieldFormTemplate;