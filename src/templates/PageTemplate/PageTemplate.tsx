import React from 'react';
import { IChildren } from 'Interfaces/children';
import { StyledContainer } from './PageTemplate.styled';

const PageTemplate = ({ children, ...props }: IChildren) => (
  <StyledContainer {...props}>
    {children} 
  </StyledContainer>
);

export default PageTemplate;