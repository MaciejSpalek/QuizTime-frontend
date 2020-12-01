import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledContainer } from './PlaceholderTemplate.styled';

const PlaceholderTemplate = ({ children }: IChildren) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default PlaceholderTemplate;