import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledContainer } from './PlaceholderTemplate.styled';

const PlaceholderTemplate = ({ children, ...props }: IChildren) => (
  <StyledContainer {...props}>
    {children} 
  </StyledContainer>
);

export default PlaceholderTemplate;