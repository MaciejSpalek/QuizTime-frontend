import React from 'react';
import { ILabel } from './Label.model';
import { StyledLabel } from './Label.styled';

const Label = ({ text, forText, ...props }: ILabel) => (
  <StyledLabel data-testid="Label" htmlFor={forText} {...props}>
    {text}
  </StyledLabel>
);

export default Label;