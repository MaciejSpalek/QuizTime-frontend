import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledContainer } from './PageTemplate.styled';

const PageTemplate = ({ children }: IChildren) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default PageTemplate;